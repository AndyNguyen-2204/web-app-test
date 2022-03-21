import React from 'react'
import styles from './List.module.scss'
import style from "../../../SCSS/styles.module.scss"
export default function List_products() {
  return (
    <div className={styles.wrapper__list}>
      <div className={style.container}>
      <h1>Menu hôm nay</h1>
      <span className={styles.wrapper__list__title}>Xem menu hôm nay</span>
      <div className={styles.wrapper__list__tab}>
        <ul>
          <li>Bán chạy</li>
          <li>Món mới</li>
          <li>Nước hoa quả</li>
          <li>Giảm giá</li>
        </ul>
      </div>
      <div className={styles.wrap__all__products}>
        <div className={style.row}>
          <div className={styles.wrap__product}>
            <img src='https://www.techsignin.com/wp-content/uploads/2015/07/google-photos-tu-dong-luu-tru-du-lieu-anh-cua-nguoi-dung.png'></img>
            <div>
              <div className={styles.wrap__product__inner}>
              <span>Trà sữa caramen</span>
              <div className={styles.concu}/>
              <span>150000vnd</span>
              </div>
              <p>
              Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
              </p>
            </div>
          </div>
          <div className={styles.wrap__product}>
            <img src='https://www.techsignin.com/wp-content/uploads/2015/07/google-photos-tu-dong-luu-tru-du-lieu-anh-cua-nguoi-dung.png'></img>
            <div>
              <div className={styles.wrap__product__inner}>
              <span>Trà sữa caramen</span>
              <div className={styles.concu}/>
              <span>150000vnd</span>
              </div>
              <p>
              Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
              </p>
            </div>
          </div>
          <div className={styles.wrap__product}>
            <img src='https://www.techsignin.com/wp-content/uploads/2015/07/google-photos-tu-dong-luu-tru-du-lieu-anh-cua-nguoi-dung.png'></img>
            <div>
              <div className={styles.wrap__product__inner}>
              <span>Trà sữa caramen</span>
              <div className={styles.concu}/>
              <span>150000vnd</span>
              </div>
              <p>
              Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
              </p>
            </div>
          </div>
          <div className={styles.wrap__product}>
            <img src='https://www.techsignin.com/wp-content/uploads/2015/07/google-photos-tu-dong-luu-tru-du-lieu-anh-cua-nguoi-dung.png'></img>
            <div>
              <div className={styles.wrap__product__inner}>
              <span>Trà sữa carame</span>
              <div className={styles.concu}/>
              <span>150000vnd</span>
              </div>
              <p>
              Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
              </p>
            </div>
          </div>
          <div className={styles.wrap__product}>
            <img src='https://www.techsignin.com/wp-content/uploads/2015/07/google-photos-tu-dong-luu-tru-du-lieu-anh-cua-nguoi-dung.png'></img>
            <div className={styles.wrap__product__content}>
              <div className={styles.wrap__product__inner}>
              <span>Trà sữa caramen</span>
              <div className={styles.concu}/>
              <span>150000vnd</span>
              </div>
              <p>
              Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
              </p>
            </div>
          </div>
          <div className={styles.wrap__product}>
            <img src='https://www.techsignin.com/wp-content/uploads/2015/07/google-photos-tu-dong-luu-tru-du-lieu-anh-cua-nguoi-dung.png'></img>
            <div className={styles.wrap__product__content}>
              <div className={styles.wrap__product__inner}>
              <span>Trà sữa caramen</span>
              <div className={styles.concu}/>
              <span>150000vnd</span>
              </div>
              <p>
              Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
              </p>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}
