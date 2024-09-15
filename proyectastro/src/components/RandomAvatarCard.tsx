import React, { useEffect, useState } from 'react';

const URL_RANDOM_AVATAR = 'https://api.minimalavatars.com/avatar/random/png';

const RandomAvatarCard: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    // Fetch a new random avatar each time the component is mounted
    setAvatarUrl(`${URL_RANDOM_AVATAR}?${Date.now()}`);
  }, []);

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Random Image</h2>
      <img src={avatarUrl} alt="Random Avatar" style={styles.avatar} />
      <hr style={styles.divider} />
      <div style={styles.info}>
        <p style={styles.descriptionTitle}>Descripcion:</p>
        <p>Colocar alguna descripcion para los personajes</p>
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
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold' as 'bold',
    marginBottom: '20px',
  },
  avatar: {
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  divider: {
    width: '100%',
    margin: '20px 0',
  },
  info: {
    textAlign: 'center' as 'center',
  },
  descriptionTitle: {
    fontWeight: 'bold' as 'bold',
  },
};

export default RandomAvatarCard;
