import { Form, WrapperInput, WrapperInputs, Input, Label, Select, Button } from "../"
import schemaCustomerRegister from "./validate"
import { useFormik } from "formik"
import {useRoot} from "../../../../hooks"

export default function FormRegisterCustomer({ handleStepper }) {

  const  {setUpdateUser,user}=useRoot();
  
  const { values, handleChange, isValid, errors, handleSubmit } = useFormik({
    initialValues: {
      names: user?.names||"",
      surnames:user?.surnames|| "",
      phone_number:user?.phone_number|| "",
      email:user?.email ||"",
      age: user?.age||"",
      gender: user?.gender||"",
      address: user?.address||"",
    },
    validationSchema: schemaCustomerRegister,
    onSubmit: function (values, bag) {
      bag.setSubmitting(false);
      handleStepper();
      console.log(values);
      setUpdateUser(values);
    }
  })

  return (
    <Form flexDirection="column" maxWidth="900px" onSubmit={handleSubmit}>
      <WrapperInputs alignItems="flex">
        <WrapperInput maxWidth="48%">
          <Label>Nombres:</Label>
          <Input type="text" placeholder="" error={errors.names} name="names" value={values.names} onChange={handleChange} />
        </WrapperInput>
        <WrapperInput maxWidth="48%">
          <Label>Apellidos:</Label>
          <Input type="text" placeholder="" error={errors.surnames} name="surnames" value={values.surnames} onChange={handleChange} />
        </WrapperInput>
      </WrapperInputs>

      <WrapperInputs alignItems="flex">
        <WrapperInput maxWidth="48%">
          <Label>Celular:</Label>
          <Input type="text" placeholder="" error={errors.phone_number} name="phone_number" value={values.phone_number} onChange={handleChange} />
        </WrapperInput>
        <WrapperInput maxWidth="48%">
          <Label>Email:</Label>
          <Input type="email" placeholder="" error={errors.email} name="email" value={values.email} onChange={handleChange} />
        </WrapperInput>
      </WrapperInputs>

      <WrapperInputs alignItems="flex">
        <WrapperInput maxWidth="48%">
          <Label>Edad:</Label>
          <Input type="number" placeholder="" error={errors.age} name="age" value={values.age} onChange={handleChange} />
        </WrapperInput>

        <WrapperInput maxWidth="48%">
          <Label>Género:</Label>
          <Select onChange={handleChange} error={errors.gender} name="gender" value={values.gender}>
            <option>Selecciona tu género</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
            <option value="other">Otro</option>
          </Select>
        </WrapperInput>
      </WrapperInputs>

      <WrapperInput>
        <Label>Dirección:</Label>
        <Input type="text" placeholder="" error={errors.address} name="address" value={values.address} onChange={handleChange} />
      </WrapperInput>

      <Button type="submit" disabled={!isValid} backgroundColor="#2ec4b6" color="#ffffff" alignSelf="flex-end">Seguiente</Button>
    </Form >
  )
}