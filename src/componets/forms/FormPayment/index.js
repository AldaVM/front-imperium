import { useContext, useState } from "react";
import { useRouter } from "next/router";
import PaymentContext from "../../../contexts/PaymentContext";
import CustomerContext from "../../../contexts/CustomerContext";
import TimetableContext from "../../../contexts/TimetableContext";
import FormPayment from "./FormPayment";
import { fetchAPI } from "../../../utils";

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

    const timetablePath =
      timetable?.intermediate_days === "Diario"
        ? "timetable/add_customer/all-days"
        : `timetable/add_customer/${timetable._id}`;

    const timetableBody =
      timetable?.intermediate_days === "Diario"
        ? {
            idsTurn: timetable.turns_id,
            _id: customer._id,
          }
        : {
            _id: customer._id,
          };

    const bodyCustomer =
      timetable?.intermediate_days === "Diario"
        ? {
            ...customer,
            date_timetable: Date.now(),
            type_timetable: `all_days: ${timetable.intermediate_days} - ${timetable.hour}`,
            timetable: timetable.turns_id,
            type_modality: paidMethod,
          }
        : {
            ...customer,
            timetable: timetable._id,
            date_timetable: Date.now(),
            type_timetable: `intermediate_days: ${timetable.intermediate_days} - ${timetable.hour}`,
            timetable: [timetable._id],
            type_modality: paidMethod,
          };

    const registerTimetable = fetchAPI(timetablePath).updateAPI(timetableBody);

    const updateCustomer = fetchAPI(`customer/${customer._id}`).updateAPI(
      bodyCustomer
    );

    try {
      await Promise.all([registerTimetable, updateCustomer]).then(() => {
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
