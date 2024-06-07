
import Styles from './SmallViewer.module.css';

const SmallViewer = ({ value }) => {
  // Aquí puedes implementar cualquier lógica adicional para el visor pequeño si es necesario
  return (
    <div className={Styles.visorAcumulador}>
      <p>{value}</p>
    </div>
  );
};

export default SmallViewer;