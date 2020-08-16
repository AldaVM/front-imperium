import { StepContent } from "./styled"

export default function Step({ description, isSelected, numberStep }) {

  return (
    <StepContent numberStep={numberStep} className={isSelected ? "active" : "inactive"}>
      <span>{description}</span>
    </StepContent>
  )

}