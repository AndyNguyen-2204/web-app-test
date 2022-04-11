import React from 'react'
import styles from "../Content_products.module.scss"
export default function content_left({data}) {
  // const numberNB=data?.filter(item=>item.category==="NB")
  // const numberTS=data?.filter(item=>item.category==="TS")
  // const numberFFT=data?.filter(item=>item.category==="FFT")
  // const numberMCC=data?.filter(item=>item.category==="MCC")
  // const numberSCD=data?.filter(item=>item.category==="SCD")
  //   const category = [
  //       { id: 1, tittle: "Món nổi bật", number: numberNB.length },
  //       { id: 2, tittle: "Trà Sữa", number: numberTS.length },
  //       { id: 3, tittle: "Fresh Fruit Teat", number: numberFFT.length },
  //       { id: 4, tittle: "Macchiato Cream Cheese", number: numberMCC.length },
  //       { id: 5, tittle: "Sữa Chua Dẻo", number: numberSCD.length }
  //     ]
  return (
    <>
      {/* <div className={styles.content_left}>
            <div className={styles.cat_title}>Danh mục</div>
            <div className={styles.list_cat}>
              {category.map(item =>
                <div className={styles.item} key={item.id}>
                  <div className={styles.name}>{item.tittle}</div>
                  <div className={styles.amount}>{item.number}</div> 
                </div>
              )}
            </div>
          </div> */}
    </>
  )
}
