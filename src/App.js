import React, { Component } from "react";
import "./App.module.css";
import Buttons from "./components/buttons/Buttons";
import Feedback from "./components/feedback/Feedback";
import { Wrapper, Title } from "./components/generalComponents/general.styled";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (evt) => {
    const { name } = evt.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const total = stateValues.reduce((previous, current) => previous + current);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = (good / total) * 100;

    if (!total) {
      return 0;
    }

    return percentage.toFixed();
  };

  render() {
    return (
      <Wrapper>
        <Title>Feedbacks</Title>
        <Buttons state={this.state} onClick={this.handleClick} />
        <Feedback
          state={this.state}
          total={this.countTotalFeedback}
          percentage={this.countPositiveFeedbackPercentage}
        />
      </Wrapper>
    );
  }
}
