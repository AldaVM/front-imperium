import { useState } from "react"
import FormTimetable from "../forms/FormTimetable";
import TableTurn from "../TableTurn";
import StepperButtons from "../shared/StepperButtons/index"
import { MessageResponse } from "../shared/Message"
import useRoot from "../../hooks/useRoot"

export default function Timetable({ handleStepper }) {

  const { turns: { turns }, currentTurn: { currentTurn } } = useRoot()

  const [isLoading, setIsLoading] = useState(null)
  const [message, setMessage] = useState("")

  return (
    <>
      <FormTimetable updateLoading={setIsLoading} updateMessage={setMessage} />
      {isLoading && <MessageResponse>Buscando turnos disponibles...⌛</MessageResponse>}
      {message && <MessageResponse>{message}</MessageResponse>}
      <TableTurn turns={turns} />
      <StepperButtons backStep={handleStepper.back} nextStep={handleStepper.next} verifyElement={currentTurn?._id} />
    </>
  )
}