import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useLayoutEffect, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
import { fetchdata, dataerr } from "./Redux/Reducers/data"
import Layout from './Component/Layout/layout';
import Store from "./Component/Store/store"
import "./SCSS/styles.scss"
import Home from './Component/Home/Home';
import { fetchAPI } from './API/fetchAPI';
function App() {
  const dispatch = useDispatch()
  async function fetchAPI() {
    try {
      axios.get(`https://614742a965467e0017384abf.mockapi.io/Api/Products`)
        .then(res => {
          dispatch(fetchdata(res.data))
        })
    } catch (error) {
      dispatch(dataerr(error))
    }

  }

  useEffect(() => {
    // axios.get(`https://614742a965467e0017384abf.mockapi.io/Api/Products`)
    //   .then(res => {
    //     dispatch(fetchdata(res.data))
    //   }).catch(error => dispatch(dataerr(error)))
    fetchAPI()
  }, [])
  const data = useSelector((data) => data.data);
  return (
    <div >
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
