import StepperButtons from "../shared/StepperButtons";
import FormPayment from "../forms/FormPayment";

export default function Payment({ handleStepper }) {
  return (
    <>
      <FormPayment />
      <StepperButtons backStep={handleStepper.back} />
    </>
  );
}
