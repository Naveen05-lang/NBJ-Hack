import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PostLoginHome.module.css";
import yogasanaImage from "../assets/yogasana.webp";

const PostLoginHome = () => {
  return (
    <div className={styles.container}>
     
      <nav className={styles.navbar}>
        <ul>
          <li><Link to="/profile">User Profile</Link></li>
          <li><Link to="/about-yogasanas">About Yogasanas</Link></li>
          <li><Link to="/leaderboard">Leadership Board</Link></li>
          <li><Link to="/yogasanas">Yogasanas</Link></li>
        </ul>
      </nav>

      <p className={styles.title}> Welcome To Yogasana Wellness</p>
      <div className={styles.content}>
        <img src={yogasanaImage} alt="Yogasana" className={styles.image} />
        <p className={styles.description}>
          Yogasanas are physical postures practiced to promote physical and mental well-being.
          These poses help in flexibility, strength, and relaxation. Regular practice improves
          overall health and enhances mindfulness.
        </p>
      </div>
    </div>
  );
};

export default PostLoginHome;
