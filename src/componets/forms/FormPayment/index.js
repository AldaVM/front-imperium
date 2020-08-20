import { Form, Button } from "../"
import { CardPayment, WrapperPayments } from "./styled"
import useRoot from "../../../hooks/useRoot"
import fetchData from "../../../helpers/fetchData"

export default function FormPayment({ updateLoading, updateMessage }) {

  const {
    paid: { paidMethod, setPaidMethod },
    customer: { customer },
    currentTurn: { currentTurn },
    currentCustomer: { idCustomer }
  } = useRoot()

  function handleClick(e) {
    if (e.target.dataset.method) {
      setPaidMethod(e.target.dataset.method)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    updateLoading(true)
    updateMessage("")

    const registerTurn = fetchData(`http://localhost:8000/v1/api/timetable/add_customer/${currentTurn._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        _id: idCustomer
      }),
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const updateCustomer = fetchData(`http://localhost:8000/v1/api/customer/${idCustomer}`, {
      method: 'PUT',
      body: JSON.stringify(customer),
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await Promise.all([registerTurn, updateCustomer]).then(values => console.log)




  }

  return (
    <Form flexDirection="column" maxWidth="900px" onSubmit={handleSubmit}>
      <WrapperPayments>
        <CardPayment background="skyblue" data-method="mensual" onClick={handleClick} price="S/ 150" className={paidMethod === "mensual" ? "active" : ""}>
          <h4 data-method="mensual">Mensual</h4>
          <span data-method="mensual">S/150</span>
        </CardPayment>
        <CardPayment background="tomato" data-method="trimestral" onClick={handleClick} price="S/ 350" className={paidMethod === "trimestral" ? "active" : ""}>
          <h4 data-method="trimestral">Trimestral</h4>
          <span data-method="trimestral">S/350</span>
        </CardPayment>
      </WrapperPayments>
      <Button type="submit" backgroundColor="#2ec4b6" color="#ffffff" disabled={!paidMethod}>Registrar</Button>
    </Form>
  )
}