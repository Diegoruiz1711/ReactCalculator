import Styles from './ClearHistoryButton.module.css'
const ClearHistoryButton = ({onClear}) => {
 

    return(
        <button className = {Styles.borrar} onClick={() => onClear()}>Borrar Historial</button>
    )
}

export default ClearHistoryButton

