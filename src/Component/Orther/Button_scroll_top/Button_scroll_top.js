import React, { useCallback, useEffect, useState } from 'react'
import { FiChevronsUp } from "react-icons/fi";
import styles from "./Button_scroll.module.scss"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
export default function Button_scroll_top({ loca }) {
  const [display, setDisplay] = useState(false)
  const [value, setValue] = useState(0)
  const [scrolly, setScroll] = useState(false)
  const handleHideBtnScroll = useCallback(() => {
    const y = window.scrollY
    if (y < 300) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }, [setScroll])

  useEffect(() => {
    window.addEventListener("scroll", handleHideBtnScroll)
    return () => window.removeEventListener(scroll, handleHideBtnScroll)
  }, [handleHideBtnScroll])

  // useEffect(() => {
  //   var scrollTo = 0;
  //   scrollTo = window.pageYOffset;
  //   setValue(scrollTo)
  // }, [value])
  const check_hide = () => {
    if (loca === "/sign_up" || loca === "/sign_in") {
      return true
    }
    return false
  }
  return (
    <div onClick={() => scroll.scrollTo(0)} className={scrolly === true || check_hide() ? styles.hide : styles.wrap_button_scroll}>
      <FiChevronsUp />
    </div>
  )
}
