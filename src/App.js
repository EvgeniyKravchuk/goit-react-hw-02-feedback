import { Component } from "react";
import ButtonsData from "./componentsData/Statistics.json";
import {
  Wrapper,
  Title,
  Button,
  Undertitle,
  StatsList,
  StatsItem,
} from "./components/Statistics/Statistics.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onRateButtonClick = ({ currentTarget }) => {
    this.setState((prevState) => ({
      [currentTarget.id]: prevState[currentTarget.id] + 1,
    }));
  };

  render() {
    return (
      <Wrapper>
        <Title>Пожалуйста, оставьте Вашу оценку:</Title>
        {ButtonsData.map(({ id, name }) => (
          <Button key={id} id={id} onClick={this.onRateButtonClick}>
            {name}
          </Button>
        ))}
        <Undertitle>Статистика:</Undertitle>
        <StatsList>
          {ButtonsData.map(({ id, name }) => (
            <StatsItem key={id}>{name + ": " + this.state[id]}</StatsItem>
          ))}
        </StatsList>
      </Wrapper>
    );
  }
}

export default App;
