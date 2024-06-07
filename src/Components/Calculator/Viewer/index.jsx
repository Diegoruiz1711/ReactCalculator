import Styles from './Viewer.module.css';
import BigViewer from './BigViewer';

const Viewer = (props) => {
  const { value, result, setValue, setReturnedValue, returnedValue } = props;

  const CalculoDevuelto = () =>{

    if (result !== ''){
      setValue('')
    } else {
      setValue(value)
    }
  }
  return (
    <div className={Styles.viewerContainer}>
      <BigViewer
        value={result !== '' ? result : value}
        setReturnedValue={setReturnedValue}
        returnedValue= {returnedValue}
        result={result}
        
              />
    </div>
   
  );
};

export default Viewer;
