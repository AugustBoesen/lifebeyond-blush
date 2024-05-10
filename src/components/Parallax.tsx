import { useEffect, useState } from 'react';

const ParallaxEffect = () => {
  const [previousScroll, setPreviousScroll] = useState(0);
  const [d, setD] = useState(0);
  const [s, setS] = useState(0);
  const speed = 1;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > previousScroll) {
        setD(s - speed);
      } else {
        setD(s + speed);
      }
      setPreviousScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousScroll, s]);

  useEffect(() => {
    setS(d);
  }, [d]);

  return {
    parallaxStyle: {
      backgroundPositionY: `${s}px`,
    },
  };
};

export default ParallaxEffect;
