import * as Yup from "yup";

const schemaTimetable = Yup.object().shape({
  intermediate_days: Yup.mixed()
    .oneOf(['L-M-V', 'M-J-S'])
    .defined()
    .required("Por favor selecciona tu género"),
  class_shift: Yup.mixed()
    .oneOf(['mañana', 'noche'])
    .defined()
    .required("Por favor selecciona tu género")
});

export default schemaTimetable