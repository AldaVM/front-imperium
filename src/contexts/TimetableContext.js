import { createContext } from "react";

const TimetableContext = createContext({
  timetable: { _id: null },
  timetables: [],
});

export default TimetableContext;
