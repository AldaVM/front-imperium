import { useContext } from "react";
import CustomerContext from "../../../contexts/CustomerContext";
import schemaCustomerRegister from "./validate";
import { useFormik } from "formik";
import FormRegister from "./FormRegister";

export default function FormRegisterContainer({ handleStepper }) {
  const { customer, updateCustomer } = useContext(CustomerContext);

  console.log(customer);
  const { values, handleChange, isValid, errors, handleSubmit } = useFormik({
    initialValues: {
      names: customer?.names || "",
      surnames: customer?.surnames || "",
      phone_number: customer?.phone_number || "",
      email: customer?.email || "",
      birthday: customer?.birthday || "",
      gender: customer?.gender || "",
      address: customer?.address || "",
    },
    validationSchema: schemaCustomerRegister,
    onSubmit: function (values, bag) {
      bag.setSubmitting(false);
      handleStepper();
      updateCustomer(Object.assign(customer, { ...values }));
    },
  });

  return (
    <FormRegister
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      isValid={isValid}
      errors={errors}
    />
  );
}
