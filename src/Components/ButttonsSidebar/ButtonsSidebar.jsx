
import Styles from './ButtonsSidebar.module.css'
import ChangeColorButton from '../Buttons/ChangeColorButton';

const ButtonsSidebar = ({ onChangeColor }) => {

    return (
        <div className={Styles.botones}>
            <ChangeColorButton className={Styles.buttonClassic} onClick={() => onChangeColor('classic')}>Classic</ChangeColorButton>
            <ChangeColorButton className={Styles.buttonRed}onClick={() => onChangeColor('red')}>Red</ChangeColorButton>
            <ChangeColorButton className={Styles.buttonGreen}onClick={() => onChangeColor('green')}>Green</ChangeColorButton>
            <ChangeColorButton className={Styles.buttonGyS} onClick={() => onChangeColor('GyS')}>Gold & Silver</ChangeColorButton>
            <ChangeColorButton className={Styles.buttonImage} onClick={() => onChangeColor('image')}>Image</ChangeColorButton>
            <ChangeColorButton className={Styles.buttonCool} onClick={() => onChangeColor('cool')}>Cool</ChangeColorButton>
        </div>
    )
}

export default ButtonsSidebar;