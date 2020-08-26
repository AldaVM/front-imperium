import { Form, WrapperInput, Input, Label } from "..";
import { Button } from "../../shared/Button";
import { MessageResponse } from "../../shared/Message";

export default function FormIndex({
  values,
  handleChange,
  isValid,
  errors,
  handleSubmit,
  isLoading,
  message,
}) {
  return (
    <Form flexDirection="column" onSubmit={handleSubmit}>
      <WrapperInput>
        <Label>DNI:</Label>
        <Input
          type="text"
          placeholder=""
          error={errors.dni}
          name="dni"
          value={values.dni}
          onChange={handleChange}
        />
      </WrapperInput>

      <Button
        type="submit"
        disabled={!isValid}
        backgroundColor="#000"
        color="#2ec4b6"
        alignSelf="center"
      >
        VALIDAR
      </Button>
      {isLoading && <MessageResponse>Validando datos...⌛</MessageResponse>}
      {message && <MessageResponse>{message}</MessageResponse>}
    </Form>
  );
}
