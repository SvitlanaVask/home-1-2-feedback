import React, { Component } from 'react';
import './styles.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/Feedback';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOptionButton = evt => {
    const option = evt.currentTarget.value;
    const amount = this.state[evt.currentTarget.value];

    this.setState(prevState => ({
      [option]: amount + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    ).toFixed();
  };

  render() {
    return (
      <>
        <div className="container">
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleOptionButton}
            />
          </Section>

          <Section title={'Statistics'}>
            {this.countTotalFeedback() === 0 ? (
              <Notification message={'There is no feedback'} />
            ) : (
              <Statistics
                options={this.state}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default App;
