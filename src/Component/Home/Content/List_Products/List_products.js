import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from 'react'
import styles from './List.module.scss'
import style from "../../../../SCSS/styles.module.scss"
import { FiEye } from "react-icons/fi";
import { FaLink} from "react-icons/fa";
import { IoCartOutline} from "react-icons/io5";
export default function List_products() {
  useEffect(()=>{
    AOS.init({
      
    })
   }, [])
  return (
    <div className={styles.wrapper__list}>
      <div className={style.container}>
        <h1 data-aos="zoom-in" data-aos-delay="500">Menu hôm nay</h1>
        <span data-aos="zoom-in" data-aos-delay="700" className={styles.wrapper__list__title}>Xem menu hôm nay</span>
        <div className={styles.wrapper__list__tab}>
          <ul  data-aos="fade-down" data-aos-delay="900">
            <li>Bán chạy</li>
            <li>Món mới</li>
            <li>Nước hoa quả</li>
            <li>Giảm giá</li>
          </ul>
        </div>
        <div className={styles.wrap__all__products}>
          <div className={style.row}>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
              <div className={styles.img__icon}>
              <img src='https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-tra-sua-dep-ngon-nhat.jpg'></img>
                <div className={styles.icon}>
                  <i><IoCartOutline/></i>
                  <i><FiEye/></i>
                  <i><FaLink/></i>
                </div>
              </div>

                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>
                    Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
                  </p>
                  <p>150000vnd</p>
                </div>

              </div>

            </div>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
                
                <div className={styles.img__icon}>
                <img src='https://allimages.sgp1.digitaloceanspaces.com/wikilaptopcom/2021/01/1609905537_50-Hinh-anh-tra-sua-dep-nhat.jpg'></img>
                <div className={styles.icon}>
                  <i><IoCartOutline/></i>
                  <i><FiEye/></i>
                  <i><FaLink/></i>
                </div>
              </div>
                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>
                    Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
                  </p>
                  <p>150000vnd</p>
                </div>

              </div>

            </div>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
               
                <div className={styles.img__icon}>
                <img src='https://static2.yan.vn/YanNews/2167221/202002/ngay-hom-nay-duoc-ban-than-bao-tra-sua-se-gap-vo-van-dieu-may-man-41f06215.jpg'></img>
                <div className={styles.icon}>
                  <i><IoCartOutline/></i>
                  <i><FiEye/></i>
                  <i><FaLink/></i>
                </div>
              </div>
                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>
                    Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
                  </p>
                  <p>150000vnd</p>
                </div>

              </div>

            </div>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
               
                <div className={styles.img__icon}>
                <img src='https://images.foody.vn/images/20992943_337893689956352_3371835710433706123_n.jpg'></img>
                <div className={styles.icon}>
                  <i><IoCartOutline/></i>
                  <i><FiEye/></i>
                  <i><FaLink/></i>
                </div>
              </div>
                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>
                    Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
                  </p>
                  <p>150000vnd</p>
                </div>

              </div>

            </div>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
                
                <div className={styles.img__icon}>
                <img src='https://i.pinimg.com/originals/21/96/3c/21963c5a5499e76d3ca6de1d54ae0224.jpg'></img>
                <div className={styles.icon}>
                  <i><IoCartOutline/></i>
                  <i><FiEye/></i>
                  <i><FaLink/></i>
                </div>
              </div>
                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>
                    Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
                  </p>
                  <p>150000vnd</p>
                </div>

              </div>

            </div>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
                
  
                <div className={styles.img__icon}>
                <img src='https://cdn.boxhoidap.com/nhung-hinh-anh-tra-sua-dep-nhat--0c839d0593a20f0f012d12088e4dc54f.wepb'></img>
                <div className={styles.icon}>
                  <i><IoCartOutline/></i>
                  <i><FiEye/></i>
                  <i><FaLink/></i>
                </div>
              </div>
                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>
                    Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
                  </p>
                  <p>150000vnd</p>
                </div>

              </div>

            </div>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
                
                <div className={styles.img__icon}>
                <img src='https://cdn.boxhoidap.com/nhung-hinh-anh-tra-sua-dep-nhat--0c839d0593a20f0f012d12088e4dc54f.wepb'></img>
                <div className={styles.icon}>
                  <i><IoCartOutline/></i>
                  <i><FiEye/></i>
                  <i><FaLink/></i>
                </div>
              </div>
                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>
                    Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
                  </p>
                  <p>150000vnd</p>
                </div>

              </div>

            </div>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
              <div className={styles.img__icon}>
                <img src='https://cdn.boxhoidap.com/nhung-hinh-anh-tra-sua-dep-nhat--0c839d0593a20f0f012d12088e4dc54f.wepb'></img>
                <div className={styles.icon}>
                  <i><IoCartOutline/></i>
                  <i><FiEye/></i>
                  <i><FaLink/></i>
                </div>
              </div>
                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>
                    Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột
                  </p>
                  <p>150000vnd</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
