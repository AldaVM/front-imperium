import { useFormik } from "formik";
import schemaTimetable from "./validate";
import FormTimetable from "./FormTimetable";
import { useContext, useState } from "react";
import TimetableContext from "../../../contexts/TimetableContext";
import { fetchAPI, validateStatusAPI } from "../../../utils/";

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

      const { postAPI } = fetchAPI("timetable/shift_available");

      await postAPI({
        items: {
          class_shift: values.class_shift,
          intermediate_days: values.intermediate_days,
        },
      })
        .then((response) => {
          const { data: timetable } = validateStatusAPI(response);
          if (timetable) {
            updateAllTimetables(timetable);
            setMessage("");
          }
        })
        .catch((error) => {
          setMessage(`${error.message}, por favor prueba con otro`);
          updateTimetable({ _id: null });
          updateAllTimetables([]);
        });

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
