import Styles from './Numbers.module.css'

const Numbers = ({ value, setValue, onClickOperation, color }) => {
  const getColorClass = () => {
    switch (color) {
      case 'classic':
        return Styles.classic;
      case 'red':
        return Styles.red;
      case 'green':
        return Styles.green;
      case 'GyS':
        return Styles.goldSilver;
      case 'image':
        return Styles.image;
      case 'cool':
        return Styles.cool;
      default:
        return '';
    }
  };
return (
     <button className={`${Styles.numeros} ${getColorClass()}`} value={value} onClick={(e) => onClickOperation(value)}>{value}</button>
   );
 };


 export default Numbers
