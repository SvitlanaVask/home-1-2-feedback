import React from 'react';
import './Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   const feedbackOptions = Object.keys(props);
  //   console.log(Object.values(props));
  // console.log(options);
  return (
    <ul className="FeedbackOptions">
      {Object.keys(options).map(key => (
        <li key={key}>
          <button
            className="FeedbackOptions__btn"
            type="button"
            value={key}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
