import * as Yup from "yup";

const schemaFormIndex = Yup.object().shape({
  dni: Yup.string()
    .matches(/^[0-9]/, "Solo números")
    .min(8, "Por favor verifica el número de DNI")
    .max(8, "Por favor verifica el número de DNI")
    .required("Este campo no puede quedarse vacío"),
});

export default schemaFormIndex;
