import './App.css';
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
    </div>
  );
}

export default App;
