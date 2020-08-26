import { useFormik } from "formik";
import fetchData from "../../../helpers/fetchData";
import schemaTimetable from "./validate";
import FormTimetable from "./FormTimetable";
import { useContext, useState } from "react";
import TimetableContext from "../../../contexts/TimetableContext";

export default function FormTimetableContainer() {
  const { updateTimetable, updateAllTimetables } = useContext(TimetableContext);
  const [isLoading, setIsLoading] = useState(null);
  const [message, setMessage] = useState(null);

  const { values, handleChange, isValid, errors, handleSubmit } = useFormik({
    initialValues: {
      intermediate_days: "",
      class_shift: "",
    },
    validationSchema: schemaTimetable,
    onSubmit: async function (values, bag) {
      bag.setSubmitting(false);
      setIsLoading(true);
      setMessage("");

      const response = await fetchData(
        "https://imperium-backend.herokuapp.com/v1/api/timetable/shift_available",
        {
          method: "POST",
          body: JSON.stringify({
            items: {
              class_shift: values.class_shift,
              intermediate_days: values.intermediate_days,
            },
          }),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        if (response.data) {
          updateAllTimetables(response.data);
          setMessage("");
        } else {
          setMessage(`${response.message}, por favor prueba con otro`);
          updateTimetable({ _id: null });
          updateAllTimetables([]);
        }
      }

      setIsLoading(false);
    },
  });

  return (
    <FormTimetable
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      isValid={isValid}
      errors={errors}
      isLoading={isLoading}
      message={message}
    />
  );
}
