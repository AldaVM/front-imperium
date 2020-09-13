import { useContext, useState } from "react";
import { useRouter } from "next/router";
import PaymentContext from "../../../contexts/PaymentContext";
import CustomerContext from "../../../contexts/CustomerContext";
import TimetableContext from "../../../contexts/TimetableContext";
import fetchData from "../../../helpers/fetchData";
import FormPayment from "./FormPayment";

export default function FormPaymentContainer() {
  const router = useRouter();

  const { paidMethod, updatePaidMethod } = useContext(PaymentContext);
  const { timetable } = useContext(TimetableContext);
  const { customer } = useContext(CustomerContext);

  const [isLoading, setIsLoading] = useState(null);
  const [message, setMessage] = useState(null);

  function handleClick(e) {
    if (e.target.dataset.method) {
      updatePaidMethod(e.target.dataset.method);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const registerTimetable = fetchData(
      `https://imperium-backend.herokuapp.com/v1/api/timetable/add_customer/${timetable._id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          _id: customer._id,
        }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const updateCustomer = fetchData(
      `https://imperium-backend.herokuapp.com/v1/api/customer/${customer._id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...customer,
          timetable: timetable._id,
          date_timetable: Date.now(),
        }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      await Promise.all([registerTimetable, updateCustomer]).then((values) => {
        setMessage("Gracias por registrarte ✌");
        router.push("/happiness");
      });
    } catch (error) {
      setMessage("Oppss algo salió mal");
    }

    setIsLoading(false);
  }

  return (
    <FormPayment
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      paidMethod={paidMethod}
      isLoading={isLoading}
      message={message}
    />
  );
}
