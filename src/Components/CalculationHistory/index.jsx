import ClearHistoryButton from "./ClearHistoryButton/index.jsx"
import HistoryContainer from "./HistoryContainer/index.jsx"
import Styles from './CalculationHistory.module.css'
import { useState } from "react"

const CalculationHistory = ({ history, setHistory, onReturnedValue, setReturnedValue, onClear }) => {

    const [clear, setClear] = useState('')

    const handleClear = () => {
        setHistory([])
    }

    return (
        <div className={Styles.historialCalculadora}>
            <HistoryContainer
                history={history}
                setHistory={setHistory}
                onReturnedValue={onReturnedValue}
                setReturnedValue={setReturnedValue}
                onClear={onClear}
            />
            <ClearHistoryButton
                onClear={handleClear}
            />
        </div>
    )
}

export default CalculationHistory
