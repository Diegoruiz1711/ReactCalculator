import { useState } from 'react';
import Styles from './App.module.css';
import ButtonsSidebar from './Components/ButttonsSidebar/ButtonsSidebar.jsx';
import ContenedorCalculadora from './Components/Calculator/Calculator.jsx';
import CalculationHistory from './Components/CalculationHistory/CalculationHistory.jsx';


const App = () => {

  const [history, setHistory] = useState([]);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [resultadoPrevio, setResultadoPrevio] = useState('');
  const [calculoCompletado, setCalculoCompletado] = useState(false);
  const [returnedValue, setReturnedValue] = useState('')
  const [color, setColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState();


  const numbers = [7, 8, 9, '%', 4, 5, 6, 'x', 1, 2, 3, '-', 'CE', 0, '+', '='];

  const handleCalculation = (expression, result) => {
    setHistory(prevHistory => [...prevHistory, { expression, result }]);
  };

  const handleOperation = (char) => {

    if (calculoCompletado) {
      if (char !== 'CE') {
        if (char === '+' || char === '-' || char === 'x' || char === '%') {
          setValue(resultadoPrevio);
          setCalculoCompletado(false);
        } else if (char === '=') {
          setValue(resultadoPrevio);
          setCalculoCompletado(false);
        } else {
          setValue('');
          setCalculoCompletado(true);
        }
        setCalculoCompletado(false);
      }
    }

    if (char === 'CE') {
      setValue('');
      setResultadoPrevio('');
    } else if (char === '%') {
      setValue(prevValue => prevValue + '/');
    } else if (char === 'x') {
      setValue(prevValue => prevValue + '*');
    } else if (char !== '=') {
      setValue(prevValue => prevValue + char);
    } else if (char === '=') {
      const resolverExpresion = (expresion) => {
        try {
          const resultado = new Function('return ' + expresion)();
          if (isNaN(resultado) || !isFinite(resultado)) {
            return 'ERROR!';
          } else {
            return resultado;
          }
        } catch {
          return 'ERROR!';
        }
      };

      const resultado = resolverExpresion(value);
      setValue(resultado.toString());
      setResultadoPrevio(resultado.toString());
      setCalculoCompletado(true);
      handleCalculation(resultado)
    } else {
      setValue(prevValue => prevValue + char);
      setCalculoCompletado(false);
    }
  };

  const handleReturnedValue = (char) => {
    if (calculoCompletado) {
      if (char !== 'CE') {
        if (char === '+' || char === '-' || char === 'x' || char === '%') {
          setValue(resultadoPrevio);
          setCalculoCompletado(false);
        } else if (char === '=') {
          setValue(resultadoPrevio);
          setCalculoCompletado(false);
        } else {
          setValue('');
          setCalculoCompletado(true);
        }
        setCalculoCompletado(false);
      }
    }

    if (char === 'CE') {
      setValue('');
      setResultadoPrevio('');
    } else if (char === '%') {
      setValue(prevValue => prevValue + '/');
    } else if (char === 'x') {
      setValue(prevValue => prevValue + '*');
    } else if (char !== '=') {
      setValue(prevValue => prevValue + char);
    } else if (char === '=') {
      const resolverExpresion = (expresion) => {
        try {
          const resultado = new Function('return ' + expresion)();
          if (isNaN(resultado) || !isFinite(resultado)) {
            return 'ERROR!';
          } else {
            return resultado;
          }
        } catch {
          return 'ERROR!';
        }
      };

      const resultado = resolverExpresion(value);
      setValue(resultado.toString());
      setResultadoPrevio(resultado.toString());
      setCalculoCompletado(true);
      handleCalculation(resultado)
    } else {
      setValue(prevValue => prevValue + char);
      setCalculoCompletado(false);
    }
  };

  const handleChangeColor = (color) => {
    setColor(color);
  };

  return (

    <div className={Styles.container} >
      <ButtonsSidebar onChangeColor={handleChangeColor}/>
      <ContenedorCalculadora
        onCalculation={handleCalculation}
        onClickOperation={handleOperation}
        numbers={numbers}
        value={value}
        result={result}
        setReturnedValue={setReturnedValue}
        returnedValue={returnedValue}
        color={color}
      />

      <CalculationHistory
        history={history}
        onReturnedValue={handleReturnedValue}
        setReturnedValue={setReturnedValue}
        setHistory={setHistory}
        color={color}
      />
    </div>
  )
}

export default App;
