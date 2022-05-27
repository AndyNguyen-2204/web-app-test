import React, { useEffect } from 'react'
import styles from "./Recommend.module.scss"
import style from "../../SCSS/styles.module.scss"
import Logo from "../products/Images/logo_header.jpg"
import Header_page from '../Header_page/Header_page'
import Banner_img from "../../Assess/Images/img.jpeg"
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import Img_content_top from "../../Assess/Images/img.jpeg"
import Footer from "../Footer/Footer"
import icon1 from "../../Assess/Images/icon1.png"
import icon2 from "../../Assess/Images/icon2.png"
import icon3 from "../../Assess/Images/icon3.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Index() {
  const box_info = [
    {
      url: icon1, title: "1. CHẤT LƯỢNG HÀNG ĐẦU", description: "An toàn, vệ sinh và ngon miệng. Việc sử dụng các nguyên liệu an toàn, tự nhiên và vệ sinh là ưu tiên hàng đầu của Gong Cha. Hương vị tuyệt hảo của các món thức uống là mục đích quan trọng tiếp theo mà chúng tôi muốn hướng đến."
    },
    {
      url: icon2, title: "2. DỊCH VỤ THÂN THIỆN & CHUYÊN NGHIỆP", description: "Gong Cha mong muốn làm hài lòng khách hàng tốt nhất với tác phong phục vụ chuyên nghiệp và thân thiện, luôn lắng nghe những đóng góp của khách hàng."
    },
    {
      url: icon3, title: "3. THƯƠNG HIỆU ĐÁNG TIN CẬY", description: "Dựa trên hai nền tảng cốt lõi là Chất Lượng và Dịch Vụ, Gong Cha luôn nỗ lực xây dựng và duy trì hình ảnh thương hiệu đáng tin cậy trong mắt khách hàng."
    }
  ]
  useEffect(() => {
    AOS.init({

    })
  }, [])
  return (
    <>
      <div className={styles.wrapper_recommend_page}>
        <div className={styles.banner_img}>
          <div className={styles.banner_content}>
            <div className={styles.banner_content_inner}>
              <h1>Tuna Tea</h1>
              <p>Thích trà sữa đã có chúng tôi!!!</p>
              <div className={styles.icon}>
                <i><TiSocialFacebook /></i>
                <i><TiSocialGooglePlus /></i>
                <i><TiSocialInstagram /></i>
                <i><TiSocialTwitter /></i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content_page_recommend}>
          <div className={style.container}>
            <div className={styles.section}>
              <h1>Giới thiệu</h1>
            </div>
            <div className={styles.content_page_top}>
              <div className={styles.content_page_top_text}>
                <h1>
                  Câu chuyện thương hiệu
                </h1>
                <p>
                  Thương hiệu <b>Tuna Tea</b> được công ty TNHH Tuna chính thức đưa vào hoạt động tại thị trường Việt Nam từ năm 2013.
                  Rất nhanh chóng, <b>Tuna Tea</b> trở thành điểm đến quen thuộc của các fan trà sữa bởi hương vị đồ uống thơm ngon, dịch vụ chất lượng và không gian thân thiện.Với tiêu chí “Nguyên liệu sạch và có nguồn gốc xuất sứ rõ ràng mới có thể tạo ra những ly đồ uống đạt chất lượng về cả hương vị lẫn nguyên liệu cấu thành”, người sáng lập thương hiệu – chị Hoàng Hiền đã dành một thời gian dài sang Đài Loan để nghiên cứu và chắt chiu tinh hoa ẩm thực trong từng ly đồ uống. Sau bao thử thách, hành trình sáng lập thương hiệu <b>Tuna Tea</b> của nữ doanh nhân đã tạo ra thành quả lớn. <b>Tuna Tea</b> được ra đời với những ly đồ uống đại diện cho tính cách sôi nổi, đam mê, tự tin và tràn đầy nhiệt huyết của giới trẻ hiện đại.
                </p>
              </div>
              <div className={styles.content_page_top_img}>
                <img src={Img_content_top}></img>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content_page_recommend_bot}>
          <div className={style.container}>
            <h1>
              Giá trị cốt lõi
            </h1>
            <div className={styles.wrap_box_info}>
              {box_info.map((e, index) =>
                <div key={index} className={styles.box_info}>
                  <div data-aos="zoom-in" data-aos-delay="400" className={styles.img_box}>
                    <img src={e.url} ></img>
                  </div>
                  <div className={styles.title}>
                    <p>{e.title}</p>
                  </div>
                  <div className={styles.description}>
                    <p>{e.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
