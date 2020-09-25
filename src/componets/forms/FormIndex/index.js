import { useState, useContext } from "react";
import { useFormik } from "formik";
import CustomerContext from "../../../contexts/CustomerContext";
import FormIndex from "./FormIndex";
import schemaFormIndex from "./validate";
import { fetchAPI } from "../../../utils";

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

      const { getAPI } = fetchAPI(`customer/find_by_dni/${values.dni}`);

      getAPI()
        .then((response) => {
          if (response.status !== 500) {
            updateCustomer(response.data);
            setMessage("Ingresando...⌛");
            setMessage(response.message);
          } else {
            setMessage(`${response.message}`);
          }
        })
        .catch((error) => {
          setMessage(`${error.message}`);
        });

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
