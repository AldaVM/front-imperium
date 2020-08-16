import { WrapperStepsButtons, ButtonStep } from "./styled"

export default function StepperButtons({ backStep, nextStep }) {
  return (
    <WrapperStepsButtons>
      <ButtonStep onClick={backStep} backgroundColor="#2ec4b6" color="#ffffff" >Regresar</ButtonStep>
      <ButtonStep onClick={nextStep} backgroundColor="#2ec4b6" color="#ffffff" >Siguientes</ButtonStep>
    </WrapperStepsButtons>
  )
}