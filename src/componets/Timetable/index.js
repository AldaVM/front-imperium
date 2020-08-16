import { useState } from "react"
import FormTimetable from "../forms/FormTimetable";
import TableTurn from "../TableTurn";
import StepperButtons from "../shared/StepperButtons/index"
import { MessageResponse } from "../shared/Message"

export default function Timetable({ handleStepper }) {

  const [timetables, setTimetable] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [message, setMessage] = useState("")
  const [idTurn, setIdTurn] = useState(null)

  return (
    <>
      <pre>{JSON.stringify(idTurn)}</pre>
      <FormTimetable updateTimetable={setTimetable} updateLoading={setIsLoading} updateMessage={setMessage} />
      {isLoading && <MessageResponse>Buscando turnos disponibles...</MessageResponse>}
      {message && <MessageResponse>{message}</MessageResponse>}
      <TableTurn turns={timetables} setIdTurn={setIdTurn} idTurn={idTurn}/>
      <StepperButtons backStep={handleStepper.back} nextStep={handleStepper.next} />
    </>
  )
}