import Styles from './Calculator.module.css';
import Viewer from './Viewer';
import NumbersContainer from './NumbersContainer/NumbersContainer';

const ContenedorCalculadora = (props) => {
  const { value, setValue, numbers, result, onClickOperation, setReturnedValue, returnedValue, color } = props;
 
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
    <div className={`${Styles.contenedorCalculadora} ${getColorClass()}`}>
      <Viewer
        value={value}
        setValue={setValue}
        result={result}
        setReturnedValue={setReturnedValue}
        returnedValue={returnedValue}
      />

      <NumbersContainer
        value={value}
        setValue={setValue}
        numbers={numbers}
        onClickOperation={onClickOperation}
        color={color}
      />
    </div>
  );
}

export default ContenedorCalculadora;
