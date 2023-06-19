import React, { useState, useEffect } from "react";
import '../../../src/styles/index.css'; // Replace with the actual path to your stylesheet file


//include images into your bundle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';



//create your first component
export const Home = () => {

	const [count, setCount] = useState(0);

  	useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => old + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="count-container" style={{ fontFamily: 'Press Start 2P' }}>
		<div className="clock">
		<FontAwesomeIcon icon={faClock} style={{ color: '#ffffff' }} />
		</div>
      {Array.from(String(count).padStart(6, '0')).map((digit, index) => (
        <div key={index} className="number">{digit}</div>
        ))}
    </div>
  	);
};
