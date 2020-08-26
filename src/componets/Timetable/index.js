import FormTimetable from "../forms/FormTimetable";
import TableTurn from "../TableTurn";
import StepperButtons from "../shared/StepperButtons/index";
import { useContext } from "react";
import TimetableContext from "../../contexts/TimetableContext";

export default function Timetable({ handleStepper }) {
  const { timetable } = useContext(TimetableContext);

  return (
    <>
      <FormTimetable />
      <TableTurn />
      <StepperButtons
        backStep={handleStepper.back}
        nextStep={handleStepper.next}
        verifyElement={timetable?._id}
      />
    </>
  );
}
