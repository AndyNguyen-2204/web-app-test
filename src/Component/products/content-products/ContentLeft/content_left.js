import React from 'react'
import styles from "../Content_products.module.scss"
export default function Content_left({data}) {
    const category = [
        { id: 1, tittle: "Món nổi bật", number: data?data.filter(e=>e.category==="NB"):"" },
        { id: 2, tittle: "Trà Sữa",number: data?data.filter(e=>e.category==="TS"):""  },
        { id: 3, tittle: "Fresh Fruit Teat", number: data?data.filter(e=>e.category==="FFT"):""  },
        { id: 4, tittle: "Macchiato Cream Cheese", number: data?data.filter(e=>e.category==="MCC"):""  },
        { id: 5, tittle: "Sữa Chua Dẻo", number: data?data.filter(e=>e.category==="SCD"):""  }
      ]
  return (
    <>
      <div className={styles.content_left}>
            <div className={styles.cat_title}>Danh mục</div>
            <div className={styles.list_cat}>
              {category.map(item =>
                <div className={styles.item} key={item.id}>
                  <div className={styles.name}>{item.tittle}</div>
                  <div className={styles.amount}>{(item.number).length}</div> 
                </div>
              )}
            </div>
          </div>
    </>
  )
}
