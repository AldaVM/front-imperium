import { Table } from "./styled"
import useRoot from "../../hooks/useRoot"

export default function TableTurn({ turns }) {

  const { currentTurn: { currentTurn, updateCurrentTurn } } = useRoot();

  function handleSelectedTurn({ target }) {
    const [turn] = turns.filter((turn) => turn._id === target.value)
    updateCurrentTurn(turn)
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
        {turns.length > 0 && turns.map((turn) => (
          <tr key={turn._id}>
            <td>
              <div>
                <label>
                  <input
                    type="radio"
                    name="id_timetable"
                    value={turn._id}
                    onChange={handleSelectedTurn}
                    checked={currentTurn._id === turn._id}
                  />
                </label>
              </div>
            </td>
            <td>{turn.class_shift}</td>
            <td>{turn.intermediate_days}</td>
            <td>{turn.hour}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}