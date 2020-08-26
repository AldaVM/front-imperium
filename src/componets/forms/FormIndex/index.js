import { useState, useContext } from "react";
import { useFormik } from "formik";
import fetchData from "../../../helpers/fetchData";
import CustomerContext from "../../../contexts/CustomerContext";
import FormIndex from "./FormIndex";
import schemaFormIndex from "./validate";

export default function FormIndexContainer() {
  const { updateCustomer } = useContext(CustomerContext);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { values, handleChange, isValid, errors, handleSubmit } = useFormik({
    initialValues: {
      dni: "",
    },
    validationSchema: schemaFormIndex,
    onSubmit: async function (values, bag) {
      bag.setSubmitting(false);
      setLoading(true);
      setMessage("");

      const response = await fetchData(
        `https://imperium-backend.herokuapp.com/v1/api/find_by_dni/${values.dni}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        updateCustomer(response.data);
        setMessage("Ingresando...⌛");
      } else {
        setMessage(`${response.message}`);
      }

      setLoading(false);
    },
  });

  return (
    <FormIndex
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      message={message}
      values={values}
      handleChange={handleChange}
      isValid={isValid}
      errors={errors}
    />
  );
}
