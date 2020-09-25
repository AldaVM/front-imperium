import { Form, WrapperInput, Input, Label, Select } from "../";
import { Button } from "../../shared/Button";

export default function FormRegister({
  handleSubmit,
  handleChange,
  errors,
  values,
  isValid,
}) {
  return (
    <Form flexDirection="column" maxWidth="900px" onSubmit={handleSubmit}>
      <WrapperInput>
        <Label>Nombres:</Label>
        <Input
          type="text"
          placeholder=""
          error={errors.names}
          name="names"
          value={values.names}
          onChange={handleChange}
        />
      </WrapperInput>
      <WrapperInput>
        <Label>Apellidos:</Label>
        <Input
          type="text"
          placeholder=""
          error={errors.surnames}
          name="surnames"
          value={values.surnames}
          onChange={handleChange}
        />
      </WrapperInput>

      <WrapperInput>
        <Label>Celular:</Label>
        <Input
          type="text"
          placeholder=""
          error={errors.phone_number}
          name="phone_number"
          value={values.phone_number}
          onChange={handleChange}
        />
      </WrapperInput>
      <WrapperInput>
        <Label>Email:</Label>
        <Input
          type="email"
          placeholder=""
          error={errors.email}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </WrapperInput>

      <WrapperInput>
        <Label>Fecha de Nacimiento:</Label>
        <Input
          type="date"
          placeholder=""
          error={errors.birthday}
          name="birthday"
          value={values.birthday}
          onChange={handleChange}
        />
      </WrapperInput>

      <WrapperInput>
        <Label>Género:</Label>
        <Select
          onChange={handleChange}
          error={errors.gender}
          name="gender"
          value={values.gender}
        >
          <option>Selecciona tu género</option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
          <option value="other">Otro</option>
        </Select>
      </WrapperInput>

      <WrapperInput>
        <Label>Dirección:</Label>
        <Input
          type="text"
          placeholder=""
          error={errors.address}
          name="address"
          value={values.address}
          onChange={handleChange}
        />
      </WrapperInput>

      <Button
        type="submit"
        disabled={!isValid}
        backgroundColor="#000000"
        color="#2ec4b6"
        alignSelf="flex-end"
      >
        SIGUIENTE 👉
      </Button>
    </Form>
  );
}
