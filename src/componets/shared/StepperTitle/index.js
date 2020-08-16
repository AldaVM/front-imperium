import { StepperHeader } from "./styled";

export default function StepperTitle({ title, caption }) {
  return (
    <StepperHeader>
      <h1>{title}</h1>
      <span>{caption}</span>
    </StepperHeader>
  )
}