import Styles from './Numbers.module.css'

const Numbers = ({ value, setValue, onClickOperation }) => {

return (
     <button className={Styles.numeros} value={value} onClick={(e) => onClickOperation(value)}>{value}</button>
   );
 };


 export default Numbers




