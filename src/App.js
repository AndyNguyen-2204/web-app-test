import './App.css';
import styles from './SCSS/styles.module.scss'
import Home from "./Component/Home/Home"
function App() {
  return (
    <div className={styles.Wrapper}>
    <Home/>
    </div>
  );
}

export default App;
