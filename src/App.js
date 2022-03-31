import './App.css';
import styles from './SCSS/styles.module.scss'
import Content from "./Component/Content/index"
import Slide from './Component/Slide&Header';
function App() {
  return (
    <div className={styles.Wrapper}>
      <Slide />
      <Content />
    </div>
  );
}

export default App;
