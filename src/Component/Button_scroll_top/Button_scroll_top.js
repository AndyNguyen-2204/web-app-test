import React,{useEffect,useState} from 'react'
import { FiChevronsUp } from "react-icons/fi";
import styles from "./Button_scroll.module.scss"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
export default function Button_scroll_top() {
  const [display,setDisplay]=useState(false)
  const [value,setValue]=useState(0)
 const scrollToTop=()=>{
    scroll.scrollToTop();
  }
  useEffect(()=>{
          var scrollTo=0;
          scrollTo=window.pageYOffset;
          setValue(scrollTo)
  },[value])
  return (
    <div onClick={() => scroll.scrollTo(0)} className={styles.wrap_button_scroll}>
        <FiChevronsUp/>
    </div>
  )
}
