import Styles from './ChangeColorButton.module.css'

const ChangeColorButton = ({ children, onClick, type = 'button', className = '' }) => {


    return (
    <button
        type={type}
        className={`button ${className}`}
        onClick={onClick}

    >
        {children}
    </button>
)
}

export default ChangeColorButton;