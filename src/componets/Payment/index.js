import StepperButtons from "../shared/StepperButtons";
import FormPayment from "../forms/FormPayment";
import { useState } from "react"
import { MessageResponse } from "../shared/Message"

export default function Payment({ handleStepper }) {

  const [isLoading, setIsLoading] = useState(null)
  const [message, setMessage] = useState("")

  return (
    <>
      <FormPayment updateLoading={setIsLoading} updateMessage={setMessage} />
      {isLoading && <MessageResponse>Registrando datos...</MessageResponse>}
      {message && <MessageResponse>{message}</MessageResponse>}
      <StepperButtons backStep={handleStepper.back} />
    </>
  )
} 