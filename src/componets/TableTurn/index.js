import { Table } from "./styled";
import { useContext } from "react";
import TimetableContext from "../../contexts/TimetableContext";

export default function TableTurn() {
  const { updateTimetable, timetables, timetable } = useContext(
    TimetableContext
  );

  function selectTimetable({ target }) {
    const [timetable] = timetables.filter(
      (timetable) => timetable._id === target.value
    );
    updateTimetable(timetable);
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Selecionar</th>
          <th>Horario</th>
          <th>Asistencia</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        {timetables.length > 0 &&
          timetables.map((tmtable) => (
            <tr key={tmtable._id}>
              <td>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="id_timetable"
                      value={tmtable._id}
                      onChange={selectTimetable}
                      checked={timetable._id === tmtable._id}
                    />
                  </label>
                </div>
              </td>
              <td>{tmtable.class_shift}</td>
              <td>{tmtable.intermediate_days}</td>
              <td>{tmtable.hour}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
