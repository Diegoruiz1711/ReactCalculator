import Styles from './Calculator.module.css';
import Viewer from './Viewer';
import NumbersContainer from './NumbersContainer';

const ContenedorCalculadora = (props) => {
  const { value, setValue, numbers, result, onClickOperation, setReturnedValue, returnedValue } = props;

  return (
    <div className={Styles.contenedorCalculadora}>
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
      />
    </div>
  );
}

export default ContenedorCalculadora;
