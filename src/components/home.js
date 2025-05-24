import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const HomePage = ({ user }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      const extractedUsername = user.email.split("@")[0];
      setUsername(extractedUsername);
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      {/* Gradient Background Overlay */}
      <div style={styles.backgroundOverlay}></div>

      {/* Navigation Header */}
      <header style={styles.header}>
        <div style={styles.logo}>CodeCraft</div>
        {user && (
          <div style={styles.userProfile}>
            <span style={styles.username}>Hi, {username}</span>
            <button style={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Elevate Your Tech Journey</h1>
        <p style={styles.heroSubtitle}>
          Learn, Practice, and Transform Your Career in Computer Science
        </p>
        <button style={styles.ctaButton} onClick={() => navigate(user ? "/dashboard" : "/register")}>
          {user ? "Go to Dashboard" : "Get Started"}
        </button>
      </section>

      {/* Features Grid */}
      <div style={styles.featuresGrid}>
        <div 
          style={styles.featureCard} 
          onClick={() => navigate("/learn-hub")}
        >
          <div style={styles.featureIcon}>📚</div>
          <h3 style={styles.featureTitle}>Learn Hub</h3>
          <p style={styles.featureDescription}>
            Curated resources for coding, subjects, and certifications
          </p>
        </div>

        <div 
          style={styles.featureCard} 
          onClick={() => navigate("/train-to-place")}
        >
          <div style={styles.featureIcon}>🚀</div>
          <h3 style={styles.featureTitle}>Train to Place</h3>
          <p style={styles.featureDescription}>
            Aptitude tests, coding challenges, and interview prep
          </p>
        </div>

        <div 
          style={styles.featureCard} 
          onClick={() => navigate("/profile")}
        >
          <div style={styles.featureIcon}>👤</div>
          <h3 style={styles.featureTitle}>Profile</h3>
          <p style={styles.featureDescription}>
            Track progress and manage your learning journey
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 CodeCraft. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Enhanced Internal CSS with Dark Theme
const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
    boxSizing: 'border-box',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(145deg, rgba(32,38,57,0.8) 0%, rgba(63,43,95,0.8) 100%)',
    zIndex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    position: 'relative',
    zIndex: 2,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#7E57C2',
    letterSpacing: '1px',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  username: {
    color: '#B0BEC5',
    fontSize: '16px',
  },
  logoutButton: {
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    color: '#F44336',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  heroSection: {
    textAlign: 'center',
    padding: '80px 20px',
    position: 'relative',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
    background: 'linear-gradient(45deg, #7E57C2, #4527A0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: '#B0BEC5',
    marginBottom: '30px',
  },
  ctaButton: {
    backgroundColor: '#7E57C2',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    fontSize: '18px',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 15px rgba(126, 87, 194, 0.4)',
  },
  featuresGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '50px',
    position: 'relative',
    zIndex: 2,
  },
  featureCard: {
    backgroundColor: 'rgba(45, 45, 60, 0.7)',
    borderRadius: '15px',
    padding: '30px',
    width: '300px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    border: '1px solid rgba(126, 87, 194, 0.2)',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '15px',
  },
  featureTitle: {
    fontSize: '22px',
    marginBottom: '10px',
    color: '#7E57C2',
  },
  featureDescription: {
    color: '#B0BEC5',
    fontSize: '15px',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
    zIndex: 2,
    marginTop: '50px',
    color: '#607D8B',
  },
  footerText: {
    fontSize: '14px',
  }
};

export default HomePage;