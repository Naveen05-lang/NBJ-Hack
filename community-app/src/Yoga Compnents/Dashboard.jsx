import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [asanas, setAsanas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchAsanas = async () => {
      try {
        const response = await axios.get("http://localhost:5500/yoga/get-all");  // Replace with actual URL
        setAsanas(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching asanas:", error);
      }
    };
    fetchAsanas();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Community Dashboard</h2>
      <div className="row">
        {asanas.map((asana) => (
          <div key={asana._id} className="col-md-4">
            <div className="card mb-3">
              <Link to={`/asana/${asana._id}`} className="text-decoration-none">
                <img src={asana.image} alt={asana.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{asana.name}</h5>
                  <p><strong>Difficulty:</strong> {asana.rating}</p>
                  <p><strong>Times Performed:</strong> {asana.count}</p>
                  <p><strong>Likes:</strong> {asana.likes}</p>
                  <p><strong>Comments:</strong> {asana.comments.join(", ")}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
