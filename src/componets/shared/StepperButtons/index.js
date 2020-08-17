import { WrapperStepsButtons, ButtonStep } from "./styled"
import useRoot from "../../../hooks/useRoot"

export default function StepperButtons({ backStep, nextStep }) {

  const { currentTurn: { currentTurn } } = useRoot()

  function handleNextStep() {
    if (currentTurn._id) {
      nextStep()
    }
  }

  return (
    <WrapperStepsButtons>
      <ButtonStep onClick={backStep} backgroundColor="#2ec4b6" color="#ffffff" >Regresar</ButtonStep>
      <ButtonStep onClick={handleNextStep} backgroundColor="#2ec4b6" color="#ffffff" disabled={!currentTurn._id}>Siguientes</ButtonStep>
    </WrapperStepsButtons>
  )
}