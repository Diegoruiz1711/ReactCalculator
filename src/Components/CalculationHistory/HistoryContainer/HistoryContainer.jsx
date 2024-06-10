import Notes from "./Notes/Notes"
import espiral from './Notes/espiral.png'
import Styles from './HistoryContainer.module.css'

const HistoryContainer = ({ history, onReturnedValue, setReturnedValue, setHistory, onClear, color }) => {

    return (
        <div className={Styles.contenedorNotas}>
            <img src={espiral} alt="Imagen de espiral de cuaderno" className={Styles.imgEspiral} />
            <Notes
                className={Styles.notas}
                history={history}
                setHistory={setHistory}
                onReturnedValue={onReturnedValue}
                setReturnedValue={setReturnedValue}
                onClear={onClear}
                color={color}
            />
        </div>
    )
}
export default HistoryContainer
