import React from 'react';
import './Statistics.css';

const Statistics = ({ options, total, positivePercentage }) => {
  console.log(options);
  return (
    <>
      {Object.keys(options).map(option => (
        <p key={option}>
          {option}: {options[option]}
        </p>
      ))}
      <p>Total: {total()}</p>
      <p>Positive feedback: {total() === 0 ? 0 : positivePercentage()}%</p>
    </>
  );
};

export default Statistics;
