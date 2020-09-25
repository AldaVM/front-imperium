import { useState, useEffect } from "react"
import Step from "../Step"
import { StepperContainer } from "./sytled"
import StepperTitle from "../StepperTitle"

export default function Stepper({ steps = [], activeStep = 1 }) {

  const [stepState, setStepState] = useState([])


  useEffect(() => {

    let createSteps = steps.map((step, index) => ({
      description: step.description,
      numberStep: index + 1,
      isSelected: index <= activeStep - 1,
    }))

    setStepState(createSteps)


  }, [steps, activeStep]);

  return (
    <>
      <StepperContainer>
        {
          stepState.length > 0 && stepState.map((step, index) => (
            <Step {...step} key={index} />
          ))
        }
      </StepperContainer>
      <StepperTitle title={steps[activeStep - 1].title} caption={steps[activeStep - 1].caption} />
    </>
  )
}