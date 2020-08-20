import * as Yup from "yup";

const schemaCustomerRegister = Yup.object().shape({
  names: Yup.string()
    .trim()
    .min(
      2,
      "Los nombres deben estar compuestos por al menos dos caracteres y no debe ser mayor a 120"
    )
    .max(
      120,
      "Los nombres deben estar compuestos por al menos dos caracteres y no debe ser mayor a 120"
    )
    .required("Este campo no puede quedarse vacío"),
  surnames: Yup.string()
    .trim()
    .min(
      2,
      "Los apellidos deben estar compuesto por al menos dos caracteres y no debe ser mayor a 150"
    )
    .max(
      150,
      "Los apellidos deben estar compuesto por al menos dos caracteres y no debe ser mayor a 150"
    )
    .required("Este campo no puede quedarse vacío"),
  email: Yup.string()
    .trim()
    .email(
      "Por favor verifica que el correo tenga un formato válido, ejemplo: imperiumcross@gmail.com"
    )
    .required("Este campo no puede quedarse vacío"),
  phone_number: Yup.string()
    .matches(/^[0-9]/, 'Solo números')
    .min(7, "Por favor verifica el número de teléfono")
    .max(9, "Por favor verifica el número de teléfono")
    .required("Este campo no puede quedarse vacío"),
  age: Yup.number()
    .required("Este campo no puede quedarse vacío")
    .positive()
    .min(5)
    .max(80)
    .integer(),
  gender: Yup.mixed()
    .oneOf(['male', 'female', 'other'])
    .defined()
    .required("Por favor selecciona tu género"),
  address: Yup.string()
    .trim()
    .min(
      10,
      "Por favor verifica que la dirección tenga como mínimo 10 caracteres y como máximo 400"
    )
    .max(
      400,
      "Por favor verifica que la dirección tenga como mínimo 10 caracteres y como máximo 400"
    )
    .required("Este campo no puede quedarse vacío"),
});

export default schemaCustomerRegister