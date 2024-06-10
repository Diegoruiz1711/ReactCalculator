import Styles from './ClearHistoryButton.module.css'
const ClearHistoryButton = ({onClear, color}) => {

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

    return(
        <button className={`${Styles.delete} ${getColorClass()}`} onClick={() => onClear()}>Borrar Historial</button>
    )
}

export default ClearHistoryButton

