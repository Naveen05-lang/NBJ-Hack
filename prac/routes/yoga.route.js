const express = require("express");
const mongoose = require("mongoose");
const YogaAsana = require("../models/yoga.model");
const User=require("../models/user.model");
const router = express.Router();

// Fetch All Yoga Asanas
router.get("/get-all", async (req, res) => {
  try {
    const asanas = await YogaAsana.find();
    res.json(asanas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//LeaderBoard Fetching
router.get("/leaderboard", async (req, res) => {
  try {
    const asanas = await YogaAsana.find();
    const userPerformance = {};
    asanas.forEach((asana) => {
      asana.performance.forEach((entry) => {
        if (!userPerformance[entry.userId]) {
          userPerformance[entry.userId] = { totalAsanas: 0, totalCount: 0 };
        }
        userPerformance[entry.userId].totalAsanas += 1; 
        userPerformance[entry.userId].totalCount += entry.count;
      });
    });

    const userIds = Object.keys(userPerformance);
    const users = await User.find({ _id: { $in: userIds } }).select("username");
    const leaderboard = userIds.map((userId) => {
      const user = users.find((u) => u._id.toString() === userId);
      return {
        userId,
        username: user ? user.username : "Unknown User",
        totalAsanas: userPerformance[userId].totalAsanas,
        totalCount: userPerformance[userId].totalCount,
      };
    }).sort((a, b) => b.totalCount - a.totalCount); 

    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Fetch a Single Yoga Asana by ID
router.get("/:id", async (req, res) => {
  try {
    const asana = await YogaAsana.findById(req.params.id);
    if (!asana) return res.status(404).json({ message: "Asana not found" });
    res.json(asana);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a New Yoga Asana
router.post("/", async (req, res) => {
  const { name, image, video, description, timing } = req.body;

  try {
    const newAsana = new YogaAsana({ name, image, video, description, timing });
    await newAsana.save();
    res.status(201).json({ message: "Asana added successfully", asana: newAsana });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Log a User’s Yoga Session
router.post("/log", async (req, res) => {
  const { userId, asanaId } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const asana = await YogaAsana.findById(asanaId);
    if (!asana) return res.status(404).json({ message: "Asana not found" });

    let userPerformance = asana.performance.find(p => p.userId.toString() === userId);

    if (userPerformance) {
      userPerformance.count += 1;
      userPerformance.timestamp = new Date();
    } else {
      asana.performance.push({ userId, count: 1, timestamp: new Date() });
    }

    await asana.save();
    res.json({ message: "Yoga session logged", asana });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Submit a Rating for a Yoga Asana
router.post("/rate", async (req, res) => {
  const { userId, asanaId, rating } = req.body;

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5" });
  }

  try {
    const asana = await YogaAsana.findById(asanaId);
    if (!asana) return res.status(404).json({ message: "Asana not found" });

    const existingRating = asana.ratings.find(r => r.userId.toString() === userId);
    if (existingRating) {
      existingRating.rating = rating;
    } else {
      asana.ratings.push({ userId, rating });
    }
    const totalRatings = asana.ratings.length;
    const avgRating = asana.ratings.reduce((sum, r) => sum + r.rating, 0) / totalRatings;
    asana.avg_rating = avgRating.toFixed(2);

    await asana.save();
    res.json({ message: "Rating submitted", avg_rating: asana.avg_rating });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a Comment on a Yoga Asana
router.post("/comment", async (req, res) => {
  const { userId, asanaId, text } = req.body;

  try {
    const asana = await YogaAsana.findById(asanaId);
    if (!asana) return res.status(404).json({ message: "Asana not found" });

    asana.comments.push({ userId, text, timestamp: new Date() });

    await asana.save();
    res.json({ message: "Comment added", comments: asana.comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch User’s Performance on Yoga Asanas
router.get("/logs/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("username email");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const asanas = await YogaAsana.find({ "performance.userId": req.params.userId });

    const userLogs = asanas.map(asana => {
      const userPerformance = asana.performance.find(p => p.userId.toString() === req.params.userId);
      return {
        asanaId: asana._id,
        asanaName: asana.name,
        image: asana.image,
        count: userPerformance ? userPerformance.count : 0,
        lastPerformed: userPerformance ? userPerformance.timestamp : null,
      };
    });
    res.json({
      userId: user._id,
      username: user.username,
      email: user.email,
      logs: userLogs,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;