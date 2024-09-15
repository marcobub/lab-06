import React, { useState } from 'react';

const ButtonCounter: React.FC = () => {
  const [count, setCount] = useState<number>(5);

  const handleClick = () => {
    setCount(prevCount => prevCount + 50);
  };

  return (
    <button onClick={handleClick}>
      {count}
    </button>
  );
};

export default ButtonCounter;