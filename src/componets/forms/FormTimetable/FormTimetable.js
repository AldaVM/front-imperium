import { Form, WrapperInput, Label, Select } from "../";
import { Button } from "../../shared/Button";
import { MessageResponse } from "../../shared/Message";

export default function FormTimetable({
  values,
  handleChange,
  isValid,
  errors,
  handleSubmit,
  isLoading,
  message,
}) {
  return (
    <Form flexDirection="column" maxWidth="900px" onSubmit={handleSubmit}>
      <WrapperInput>
        <Label>Asistencia:</Label>
        <Select
          onChange={handleChange}
          error={errors.intermediate_days}
          name="intermediate_days"
          value={values.intermediate_days}
        >
          <option>Selecciona los días frecuentes:</option>
          <option value="L-M-V">Lunes-Miércoles-Viernes</option>
          <option value="M-J-S">Martes-Jueves-Sábado</option>
          <option value="all_days">Diario</option>
        </Select>
      </WrapperInput>

      <WrapperInput>
        <Label>Horario:</Label>
        <Select
          onChange={handleChange}
          error={errors.class_shift}
          name="class_shift"
          value={values.class_shift}
        >
          <option>Selecciona un horario</option>
          <option value="mañana">Mañana</option>
          <option value="noche">Noche</option>
          <option value="openbox">Tarde - OPEN BOX</option>
        </Select>
      </WrapperInput>

      <Button
        type="submit"
        disabled={!isValid}
        backgroundColor="#000000"
        color="#2ec4b6"
        alignSelf="flex-end"
        alignSelf="flex-start"
      >
        CONSULTAR
      </Button>
      {isLoading && <MessageResponse>Buscando turnos...⌛</MessageResponse>}
      {message && <MessageResponse>{message}</MessageResponse>}
    </Form>
  );
}
