import './App.css';
import styles from './SCSS/styles.module.scss'
import Home from "./Component/Home/Home"
import Recommend from "./Component/Recommend/Index"
import Order from './Component/Order/Order';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Products from './Component/products/Products';
import { useLayoutEffect ,useEffect,useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
import { fetchdata, dataerr } from "./Redux/Reducers/data"
import Button_scroll_top from "./Component/Orther/Button_scroll_top/Button_scroll_top"
import Sign_in from './Component/Sign_in/Sign_in';
import Sign_up from "./Component/Sign_up/Sign_up"
function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data)
  const location=useLocation()
  const [loca,setLoca]=useState("")
useEffect(()=>{
  window.scrollTo(0,0)
  setLoca(location.pathname)
},[location])
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
    <div  className={styles.Wrapper}>
      <Button_scroll_top loca={loca}/>
      <Routes>
        <Route path="/" exam element={<Home/>} />
        <Route path="/products" element={<Products data={data}/>} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/order" element={<Order />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/sign_up" element={<Sign_up />} />
      </Routes>
    </div>
  );
}

export default App;
