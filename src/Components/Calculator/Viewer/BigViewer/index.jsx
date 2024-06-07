import React from 'react';
import Styles from './BigViewer.module.css';

const BigViewer = (props) => {
  const { value, result, returnedValue } = props;
  return (
    <div className={Styles.visorActual}>
      {value}
      {result}
      {returnedValue}
    </div>
  );
};

export default BigViewer;

