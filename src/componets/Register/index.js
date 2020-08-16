import { useState } from "react"
import Stepper from "../shared/Stepper"
import FormRegisterCustomer from "../forms/FormRegister"
import Timetable from "../Timetable"

export default function Register() {

  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { description: "Registra tus datos personales", title: "¡Bienvenido a nuestro proceso de Registro!", caption: "Por favor ingresa tus datos" },
    { description: "Selecciona tu turno", title: "¡Muy bien!, ahora seleccion un turno", caption: "Primero verifica los turnos disponibles" },
    { description: "Seleciona tu modalidad de pago", title: "Bienvenido a nuestro proceso de Registro", caption: "Por favor ingresa tus datos" },
  ];

  const isValidStep = activeStep > 0 && activeStep <= steps.length - 1;

  const backStep = () => setActiveStep(activeStep - 1);
  const nextStep = () => setActiveStep(isValidStep ? activeStep + 1 : steps.length)


  return (
    <>
      <Stepper steps={steps} activeStep={activeStep} />
      {activeStep === 1 && <FormRegisterCustomer handleStepper={nextStep} />}
      {activeStep === 2 && <Timetable />}
      {activeStep > 1 && <span onClick={backStep}>BACK</span>}
    </>
  )
}
