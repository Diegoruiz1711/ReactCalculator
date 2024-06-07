import Styles from './Notes.module.css'

const Notes = ({ history, onReturnedValue }) => {

  return (
    <div className={Styles.historialCalculos}>
      <h1>Historial de Cálculos</h1>
      <ul>
        {history.map((calculation) => (
          <div className={Styles.contenedorBoton}>
            <button className={Styles.botonResult} onClick={() => onReturnedValue(calculation.expression)}>
              <li>
                {calculation.expression}
              </li>
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Notes
