import './App.css';
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
    </div>
  );
}

export default App;
