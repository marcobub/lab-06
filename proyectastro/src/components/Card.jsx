// src/components/Card.jsx
import React, { useState, useEffect } from 'react';

const Card = () => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    fetch('https://api.minimalavatars.com/avatar/random/png')
      .then(response => response.blob())
      .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setAvatar(imageObjectURL);
      });
  }, []);

  return (
    <div style={styles.card}>
      <img src={avatar} alt="Avatar" style={styles.avatar} />
      <div style={styles.content}>
        <h2>Card Title</h2>
        <p>Some description text here...</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '350px',
    height: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    width: '100%',
    height: 'auto',
  },
  content: {
    padding: '16px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Card;
