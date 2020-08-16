import { Table } from "./styled"

export default function TableTurn({ turns = [], setIdTurn, idTurn }) {

  function updateIdTurn(e) {
    setIdTurn(e.target.value)
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
                <label><input type="radio" id='regular' name="id_timetable" value={turn._id} onClick={updateIdTurn} checked={turn._id === idTurn ? "defaultChecked" : ""} /></label>
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