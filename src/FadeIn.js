import React, { useEffect, useState } from 'react';

const FadeIn = ({ children }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return <div className={`fade-in ${fadeIn ? 'active' : ''}`}>{children}</div>;
};

export default FadeIn;
