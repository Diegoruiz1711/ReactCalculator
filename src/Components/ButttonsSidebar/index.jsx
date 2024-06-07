import ChangeColorClassic from './Classic/index.jsx'
import ChangeColorRed from './Red/index.jsx'
import ChangeColorGreen from './Green/index.jsx'
import ChangeColorGyS from './GoldSilver/index.jsx'
import ChangeColorImage from './Image/index.jsx'
import ChangeColorCool from './Cool/index.jsx'
import Styles from './ButtonsSidebar.module.css'

const ButtonsSidebar = () => {

    return (
        <div className={Styles.botones}>
        <ChangeColorClassic name={'Classic'}/>
        <ChangeColorRed name={'Red'} className ={Styles.botonRed}/>
        <ChangeColorGreen name={'Green'} className ={Styles.botonGreen}/>
        <ChangeColorGyS name={'Gold & Silver'} className ={Styles.botonGyS}/>
        <ChangeColorImage name={'Image'} className ={Styles.botonImage}/>
        <ChangeColorCool name={'Cool'} className ={Styles.botonCool}/>
        </div>
    )
} 

export default ButtonsSidebar