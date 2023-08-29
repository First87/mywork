import Image from "next/image";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "./component/slide";
import Head from "next/head";
import AnimatedElement1 from "./component/animation";
import AnimatedElement2 from "./component/animation2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


// import AnimatedTextWord from "./component/AnimatedTextWord";

const Home = () => {
  // const textToAnimate = "";
  const textToAnimate = " Products";
  return (
    <>
      <Head>
        <title>หน้าแรก | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        <link rel="icon" href="nav.png" type="image/x-icon"></link>
      </Head>
      <main>
        <Banner />

        <div className="container">
          <div className="d-grid  grid">
            <AnimatedElement1>
              <div className="">
                <div className="container-fluid text-start p-5 ">
                  <h2
                    id="about"
                    className="tex"
                    style={{
                      color: "black",
                      fontSize: "35px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp; เกี่ยวกับเรา
                  </h2>
                  <div className="container-fluid">
                    <p
                      style={{
                        color: "black",
                        textAlign: "start",
                        fontSize: "20px",
                      }}
                    >
                      เสริมศิริ อลูมินั่ม &สแตนเลส ยินดีต้อนรับ ลูกค้าทุกท่านค่ะ
                      ร้านเราเป็นศูนย์รวมอลูมิเนียมเส้น และสแตนเลส
                      อุปกรณ์งานติดตั้งประตู-หน้าต่างกรอบอลูมิเนียมที่เกี่ยวข้องทุกชนิดค่ะ
                      พร้อมส่งทั่วไทย สามารถทักมาก่อนได้ line : 0958168595
                      หน้าร้านอยู่ อ.พระประแดง จ.สมุทรปราการ 02-817-0441 หรือ
                      095-816-8595
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement1>
            <div>
              <div className="container p-3 content-f">
                <iframe
                  className="f1"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100057451749957&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="330"
                  height="400"

                ></iframe>
              </div>
            </div>
          </div>
          <div className="container sm">
            <Slide />
            <section className="container" id="featured-products">
              <div className="section-info">
                <h1>ผลงานที่ผ่านมา</h1>
                <div className="line"></div>
              </div>
              <div className="products">
          <div className="product">
            <div className="product-info">
    
            </div>
            <Image
            alt="banner"
               src="https://drive.google.com/uc?export=download&id=1zpLH7-aMrf4EcxdpWCQjX-9DbiMm-9Pd"
              height={300}
              width={300}
              style={{width:"100%" , height:"auto"}}
            />
          </div>

          <div className="product">
            <Image
            alt="banner"
               src="https://drive.google.com/uc?export=download&id=1tdM5FTmPf8KGKlMV-Qy5JNWmfSw20gkr"
              height={300}
              width={300}
              style={{width:"100%" , height:"auto"}}
            />
            <div className="product-info">
             
            </div>
          </div>

          <div className="product">
            <div className="product-info">
             
            </div>
            <Image
            alt="banner"
               src="https://drive.google.com/uc?export=download&id=1mvKs0voT8z9pVVbfIB7jCiuEvMFzmaG2"
              height={300}
              width={300}
              style={{width:"100%" , height:"auto"}}
              
            />
          </div>
        </div>
            </section>
            
            
          </div>
        </div>
        
        
      </main>
    </>
  );
};
export default Home;
