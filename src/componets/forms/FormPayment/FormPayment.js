import { Form } from "../";
import { Button } from "../../shared/Button";
import { CardPayment, WrapperPayments } from "./styled";
import { MessageResponse } from "../../shared/Message";

export default function FormPayment({
  handleSubmit,
  handleClick,
  paidMethod,
  isLoading,
  message,
}) {
  return (
    <Form flexDirection="column" maxWidth="900px" onSubmit={handleSubmit}>
      <WrapperPayments>
        <CardPayment
          background="#fff"
          color="#000"
          data-method="mensual"
          onClick={handleClick}
          price="S/ 150"
          className={paidMethod === "mensual" ? "active" : ""}
        >
          <h4 data-method="mensual">Mensual</h4>
          <span data-method="mensual">S/150</span>
        </CardPayment>
        <CardPayment
          background="#fff"
          color="#000"
          data-method="trimestral"
          onClick={handleClick}
          price="S/ 350"
          className={paidMethod === "trimestral" ? "active" : ""}
        >
          <h4 data-method="trimestral">Trimestral</h4>
          <span data-method="trimestral">S/350</span>
        </CardPayment>
      </WrapperPayments>
      <Button
        type="submit"
        backgroundColor="#000000"
        color="#2ec4b6"
        disabled={!paidMethod}
      >
        REGISTRAR
      </Button>
      {isLoading && <MessageResponse>Validando datos...⌛</MessageResponse>}
      {message && <MessageResponse>{message}</MessageResponse>}
    </Form>
  );
}
