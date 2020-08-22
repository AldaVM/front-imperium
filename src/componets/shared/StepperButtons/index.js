import { WrapperStepsButtons } from "./styled"
import { Button } from "../Button"

export default function StepperButtons({ backStep, nextStep, verifyElement }) {

  function handleNextStep() {
    if (verifyElement) {
      nextStep()
    }
  }

  return (
    <WrapperStepsButtons>
      <Button onClick={backStep} backgroundColor="#000" color="#2ec4b6" >👈 REGRESAR</Button>
      {nextStep && <Button onClick={handleNextStep} backgroundColor="#000" color="#2ec4b6" disabled={!verifyElement}>SIGUIENTE 👉</Button>}
    </WrapperStepsButtons>
  )
}