import './App.css';
<<<<<<< Updated upstream
import Header from './Component/Header/Header';
import  styles from'./SCSS/styles.module.scss'
import Slice__Img from "./Assess/Images/slide1.jpg"
import Content from "./Component/Content/index"
function App() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.slide}>
        <img src={Slice__Img} alt=''></img>
        <div className={styles.wrap__container}>
        <div className={styles.container}>
            <Header/> 
         </div>
        </div>
      </div>  
      <div className={styles.wrap__content}>     
         <Content/>
        </div>
=======
import "./SCSS/styles.scss"
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
function App() {
  return (
    <div >
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </Layout>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
