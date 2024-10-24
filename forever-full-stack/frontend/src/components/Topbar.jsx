import React from 'react';

const TopBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.socialMedia}>
        {/* Social Media Details */}
        <a href="https://facebook.com" style={styles.link}>Facebook</a>
        <a href="https://twitter.com" style={styles.link}>Twitter</a>
        <a href="https://instagram.com" style={styles.link}>Instagram</a>
      </div>
      <div style={styles.contactDetails}>
        {/* Contact Details */}
        <span>Email: info@example.com</span>
        <span> | Phone: +123-456-7890</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007BA7', // Cerulean Blue
    width: '100%',
    padding: '10px 20px',
    position: 'absolute', // Changed to 'absolute'
    top: 0,
    left:0,
    zIndex: 1000,
    color: 'white',
  },
  socialMedia: {
    display: 'flex',
    gap: '15px',
  },
  contactDetails: {
    display: 'flex',
    gap: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default TopBar;
