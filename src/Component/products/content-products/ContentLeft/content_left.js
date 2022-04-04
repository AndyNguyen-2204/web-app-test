import React from 'react'
import styles from "../Content_products.module.scss"
export default function content_left() {
    const category = [
        { id: 1, tittle: "Món nổi bật", number: "2" },
        { id: 2, tittle: "Trà Sữa", number: "2" },
        { id: 3, tittle: "Fresh Fruit Teat", number: "2" },
        { id: 4, tittle: "Macchiato Cream Cheese", number: "2" },
        { id: 5, tittle: "Sữa Chua Dẻo", number: "2" }
      ]
  return (
    <>
      <div className={styles.content_left}>
            <div className={styles.cat_title}>Danh mục</div>
            <div className={styles.list_cat}>
              {category.map(item =>
                <div className={styles.item} key={item.id}>
                  <div className={styles.name}>{item.tittle}</div>
                  <div className={styles.amount}>{item.number}</div>
                </div>
              )}
            </div>
          </div>
    </>
  )
}
