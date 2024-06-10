import Numbers from "./Numbers/Numbers.jsx"
import Styles from './NumbersContainer.module.css'

const NumbersContainer = ({ value, setValue, result, numbers, onClickOperation, color }) => {
 
  return (
    <div className={Styles.contenedorBotones}>
      {numbers.map((number) => (
        <Numbers
          value={number}
          setValue={setValue}
          onClickOperation={onClickOperation}
          color={color}
        />
      ))}
    </div>
  );
};

export default NumbersContainer;