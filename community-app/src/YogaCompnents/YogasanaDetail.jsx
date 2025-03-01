import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const YogasanaDetail = (id) => {
  const { id } = useParams();  // Get the asana ID from the URL
  const [asana, setAsana] = useState(null);
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState("");

  // Fetch the specific asana data
  useEffect(() => {
    const fetchAsana = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/yoga/${id}`);
        setAsana(response.data);
        setCount(response.data.count);
      } catch (error) {
        console.error("Error fetching asana:", error);
      }
    };
    fetchAsana();
  }, [id]);

  // Update the count when the button is clicked
  const updateCount = async () => {
    try {
      await axios.put(`YOUR_BACKEND_URL/asanas/${id}`, { count: count + 1 });
      setCount(count + 1);  // Update the count locally after the PUT request
    } catch (error) {
      console.error("Error updating count:", error);
    }
  };

  // Add a new comment to the asana
  const addComment = async () => {
    try {
      const updatedAsana = { ...asana, comments: [...asana.comments, comment] };
      await axios.put(`YOUR_BACKEND_URL/asanas/${id}`, updatedAsana);
      setAsana(updatedAsana);  // Update the asana with the new comment
      setComment("");  // Reset the comment input field
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!asana) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{asana.name}</h2>
      {asana.video && (
        <video controls className="w-100">
          <source src={asana.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <p>{asana.description}</p>
      <p><strong>Timing:</strong> {asana.timing}</p>
      <p><strong>Difficulty:</strong> {asana.rating}</p>
      <p><strong>Likes:</strong> {asana.likes}</p>
      <p><strong>Comments:</strong> {asana.comments.join(", ")}</p>
      <button onClick={updateCount} className="btn btn-success">
        Log Another Session
      </button>

      <div className="mt-3">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="form-control"
          placeholder="Add a comment"
        ></textarea>
        <button onClick={addComment} className="btn btn-primary mt-2">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default YogasanaDetail;
