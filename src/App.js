import './App.css';
import styles from './SCSS/styles.module.scss'
import Home from "./Component/Home/Home"
import Router from './Component/Router/Router';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Component/products/Products';
function App() {
  return (
    <div className={styles.Wrapper}>
      <Products/>
    </div>
  );
}

export default App;
