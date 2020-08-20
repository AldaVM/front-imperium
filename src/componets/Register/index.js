import { useState } from "react"
import Stepper from "../shared/Stepper"
import FormRegisterCustomer from "../forms/FormRegister"
import Timetable from "../Timetable"
import Payment from "../Payment"

export default function Register() {

  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { description: "Registra tus datos", title: "¡Bienvenido a nuestro proceso de registro!", caption: "Por favor ingresa tus datos" },
    { description: "Selecciona tu turno", title: "¡Muy bien!, ahora selecciona un turno", caption: "Primero verifica los turnos disponibles" },
    { description: "Seleciona tu modalidad de pago", title: "¡Genial!, selecciona el método de pago para finalizar el proceso", caption: "Selecciona un método para ser parte de nuestra familia" },
  ];

  const isValidStep = activeStep > 0 && activeStep <= steps.length - 1;

  const backStep = () => setActiveStep(activeStep - 1);
  const nextStep = () => setActiveStep(isValidStep ? activeStep + 1 : steps.length)


  return (
    <>
      <Stepper steps={steps} activeStep={activeStep} />
      {activeStep === 1 && <FormRegisterCustomer handleStepper={nextStep} />}
      {activeStep === 2 && <Timetable handleStepper={{
        back: backStep,
        next: nextStep
      }} />}
      {activeStep === 3 && <Payment handleStepper={{
        back: backStep,
      }} />}
    </>
  )
}
