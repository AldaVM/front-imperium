import { WrapperStepsButtons, ButtonStep } from "./styled"

export default function StepperButtons({ backStep, nextStep, verifyElement }) {

  function handleNextStep() {
    if (verifyElement) {
      nextStep()
    }
  }

  return (
    <WrapperStepsButtons>
      <ButtonStep onClick={backStep} backgroundColor="#2ec4b6" color="#ffffff" >Regresar</ButtonStep>
      {nextStep && <ButtonStep onClick={handleNextStep} backgroundColor="#2ec4b6" color="#ffffff" disabled={!verifyElement}>Siguiente</ButtonStep>}
    </WrapperStepsButtons>
  )
}