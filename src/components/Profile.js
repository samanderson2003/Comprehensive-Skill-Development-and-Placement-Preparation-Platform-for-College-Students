import React from "react";

const Profile = () => {
  return (
    <div style={styles.container}>
      <h1>👤 Profile</h1>
      <p>Track progress, save materials, and manage your learning journey.</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    color: "#333",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    padding: "20px",
  },
};

export default Profile;
