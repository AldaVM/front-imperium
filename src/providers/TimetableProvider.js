import { useState } from "react";
import TimetableContext from "../contexts/TimetableContext";

export default function TimetableProvider({ children }) {
  const [timetables, setTimetables] = useState([]);
  const [timetable, setTimetable] = useState({ _id: null });

  function updateTimetable(currentTimetable) {
    setTimetable(currentTimetable);
  }

  function updateAllTimetables(currentTimetables) {
    setTimetables(currentTimetables);
  }

  return (
    <TimetableContext.Provider
      value={{
        timetable,
        updateTimetable,
        timetables,
        updateAllTimetables,
      }}
    >
      {children}
    </TimetableContext.Provider>
  );
}
