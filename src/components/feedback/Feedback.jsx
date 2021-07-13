import FeedbackList from "./FeedbackList";
import { Section, Undertitle } from "../generalComponents/general.styled";

export default function Feedback({ state, total, percentage }) {
  return (
    <Section list="true">
      <Undertitle></Undertitle>
      <FeedbackList state={state} total={total} percentage={percentage} />
    </Section>
  );
}
