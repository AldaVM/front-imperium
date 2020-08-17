import { Form, WrapperInput, WrapperInputs, Label, Select, Button } from "../"
import { useFormik } from "formik"
import fetchData from "../../../helpers/fetchData"
import schemaTimetable from "./validate"
import useRoot from "../../../hooks/useRoot"

export default function FormTimetable({ updateLoading, updateMessage }) {

  const { turns: { updateTurns } } = useRoot()
  const { currentTurn: { updateCurrentTurn } } = useRoot();

  const { values, handleChange, isValid, errors, handleSubmit } = useFormik({
    initialValues: {
      intermediate_days: "",
      class_shift: "",
    },
    validationSchema: schemaTimetable,
    onSubmit: async function (values, bag) {
      bag.setSubmitting(false);
      updateLoading(true)
      updateMessage("")

      const filterItems = {
        items: {
          class_shift: values.class_shift,
          intermediate_days: values.intermediate_days
        }
      }

      const response = await fetchData("http://localhost:8000/v1/api/timetable/shift_available", {
        method: 'POST',
        body: JSON.stringify(filterItems),
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 200) {
        if (response.data) {
          updateTurns(response.data)
          updateMessage("")
        } else {
          updateMessage(`${response.message}, prueba con otro`)
          updateCurrentTurn({ _id: null })
          updateTurns([])
        }
      }

      updateLoading(false)
    }

  })


  return (
    <Form flexDirection="column" maxWidth="900px" onSubmit={handleSubmit}>

      <WrapperInputs alignItems="flex">

        <WrapperInput maxWidth="48%">
          <Label>Asistencia:</Label>
          <Select onChange={handleChange} error={errors.intermediate_days} name="intermediate_days" value={values.intermediate_days}>
            <option>Selecciona los días frecuentes:</option>
            <option value="L-M-V">Lunes-Miércoles-Viernes</option>
            <option value="M-J-S">Martes-Jueves-Sábado</option>
          </Select>
        </WrapperInput>

        <WrapperInput maxWidth="48%">
          <Label>Horario:</Label>
          <Select onChange={handleChange} error={errors.class_shift} name="class_shift" value={values.class_shift}>
            <option>Selecciona un horario</option>
            <option value="mañana">Mañana</option>
            <option value="noche">Noche</option>
          </Select>
        </WrapperInput>

      </WrapperInputs>

      <Button type="submit" disabled={!isValid} backgroundColor="#2ec4b6" color="#ffffff" alignSelf="flex-end">Consultar</Button>
    </Form >
  )
}