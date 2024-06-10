import Styles from './Notes.module.css';

const Notes = ({ history, onReturnedValue, color }) => {
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

  const titleClass = color === 'goldSilver' || color === 'image' ? Styles.blackText : '';
  const listItemClass = color === 'goldSilver' || color === 'image' ? Styles.blackText : '';

  return (
    <div className={`${Styles.historialCalculos} ${getColorClass()}`}>
      <h1 className={titleClass}>Historial de Cálculos</h1>
      <ul>
        {history.map((calculation, index) => (
          <div key={index} className={Styles.contenedorBoton}>
            <div
              className={`${Styles.botonResult} ${listItemClass}`}
              onClick={() => onReturnedValue(calculation.expression)}
            >
              <li className={listItemClass}>{calculation.expression}</li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
