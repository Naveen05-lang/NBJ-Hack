const mongoose = require("mongoose");

const YogaAsanaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, 
  video: { type: String, required: true }, 
  description: { type: String, required: true },
  timing: { type: String , required: true }, 
  performance: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      count: { type: Number, default: 0 },
      timestamp: { type: Date, default: Date.now },
    }
  ],
  ratings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      rating: { type: Number, min: 1, max: 5, required: true },
    }
  ],
  avg_rating: { type: Number, default: 0 },
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    }
  ]
});

module.exports = mongoose.model("asanas", YogaAsanaSchema);