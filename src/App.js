import './App.css';
import styles from './SCSS/styles.module.scss'
import Home from "./Component/Home/Home"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Component/products/Products';
import { useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
import { fetchdata, dataerr } from "./Redux/Reducers/data"
function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data)
  useLayoutEffect(() => {
    axios.get("https://614742a965467e0017384abf.mockapi.io/Api/AllItem")
      .then(res => {
        dispatch(fetchdata(res.data))
      })
      .catch(
        dispatch(dataerr())
      )
  }, [])
  return (
    <div className={styles.Wrapper}>
      <Routes>
        <Route path="/" exam element={<Home/>} />
        <Route path="/products" element={<Products data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
