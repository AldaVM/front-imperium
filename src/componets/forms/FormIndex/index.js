import { Form, WrapperInput, Input, Label, Button } from "../"
import { useFormik } from "formik"
import useRoot from "../../../hooks/useRoot"
import fetchData from "../../../helpers/fetchData"

export default function FormIndex({ updateLoading, updateMessage }) {

  const { currentCustomer: { updateIdCustomer }, customer: { updateCustomer } } = useRoot()

  const { values, handleChange, isValid, errors, handleSubmit } = useFormik({
    initialValues: {
      dni: "",
    },
    onSubmit: async function (values, bag) {
      bag.setSubmitting(false);
      updateLoading(true);
      updateMessage("");

      const response = await fetchData("http://localhost:8000/v1/api/customer/find_by_dni", {
        method: 'POST',
        body: JSON.stringify({
          items: {
            dni: values.dni
          }
        }),
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        }
      });


      if (response.status === 200) {

        const [customer] = response.data
        updateIdCustomer(customer._id)
        updateCustomer(customer)
        updateMessage("Ingresando...")

      } else {
        updateMessage(`${response.message}`)
      }

      updateLoading(false);
    }
  })

  return (
    <Form flexDirection="column" onSubmit={handleSubmit}>

      <WrapperInput>
        <Label>DNI:</Label>
        <Input type="text" placeholder="" error={errors.dni} name="dni" value={values.dni} onChange={handleChange} />
      </WrapperInput>

      <Button type="submit" disabled={!isValid} backgroundColor="#2ec4b6" color="#ffffff" alignSelf="center">Validar</Button>
    </Form >
  )
}