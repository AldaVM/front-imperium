import { useState } from "react"
import FormTimetable from "../forms/FormTimetable";
import TableTurn from "../TableTurn";
import { MessageResponse } from "../shared/Message"

export default function Timetable() {

  const [timetables, setTimetable] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [message, setMessage] = useState("")

  return (
    <>
      <FormTimetable updateTimetable={setTimetable} updateLoading={setIsLoading} updateMessage={setMessage} />
      {isLoading && <MessageResponse>Buscando turnos disponibles...</MessageResponse>}
      {message && <MessageResponse>{message}</MessageResponse>}
      <TableTurn turns={timetables} />
    </>
  )
}