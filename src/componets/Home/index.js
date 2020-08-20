import { useState, useEffect } from "react"
import FormIndex from "../forms/FormIndex"
import { MessageResponse } from "../shared/Message"
import { useRouter } from "next/router"
import useRoot from "../../hooks/useRoot"
import { HomeWrapper } from "./styled"

export default function Home() {

  const router = useRouter();
  const { currentCustomer: { idCustomer } } = useRoot()

  if (idCustomer) {
    router.push("/register")
  }

  useEffect(() => {
    router.prefetch('/register')
  }, [])

  const [isLoading, setIsLoading] = useState(null)
  const [message, setMessage] = useState("")

  return (
    <HomeWrapper>
      <h1>Ingresa tu número de DNI</h1>
      <FormIndex updateLoading={setIsLoading} updateMessage={setMessage} />
      {isLoading && <MessageResponse>Validando datos...</MessageResponse>}
      {message && <MessageResponse>{message}</MessageResponse>}
    </HomeWrapper>
  )
}
