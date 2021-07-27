import React, { useState } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Header from "./components/Header";
import { options } from "./data/options";
import Container from "./components/Container";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const onLeaveFeedback = ({ target }) => {
  //   const { mark } = target.dataset;
  //   this.setState((prevState) => ({ [mark]: prevState[mark] + 1 }));
  // };

  const onLeaveFeedback = ({ target }) => {
    const { mark } = target.dataset;
    console.log(mark);
    switch (mark) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Header />
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistic">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      </Section>
    </Container>
  );
}
// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = ({ target }) => {
//   const { mark } = target.dataset;
//   this.setState((prevState) => ({ [mark]: prevState[mark] + 1 }));
// }
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();

//     return (
//       <Container>
//         <Header />
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistic">
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={total}
//             percentage={percentage}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }

// export default App;
