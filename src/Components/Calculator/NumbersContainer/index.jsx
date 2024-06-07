import Numbers from "../NumbersContainer/Numbers/index.jsx"
import Styles from './NumbersContainer.module.css'

const NumbersContainer = (props) => {
  const { value, setValue, result, numbers, onClickOperation } = props;
  return (
    <div className={Styles.contenedorBotones}>
      {numbers.map((number) => (
        <Numbers
          value={number}
          setValue={setValue}
          onClickOperation={onClickOperation}
        />
      ))}
    </div>
  );
};

export default NumbersContainer;





