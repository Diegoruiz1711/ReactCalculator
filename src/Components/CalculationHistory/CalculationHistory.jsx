import ClearHistoryButton from "./ClearHistoryButton/ClearHistoryButton.jsx"
import HistoryContainer from "./HistoryContainer/HistoryContainer.jsx"
import Styles from './CalculationHistory.module.css'
import { useState } from "react"

const CalculationHistory = ({ history, setHistory, onReturnedValue, setReturnedValue, onClear, color }) => {

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
                color={color}
            />
            <ClearHistoryButton
                onClear={handleClear}
                color={color}
            />
        </div>
    )
}

export default CalculationHistory;
