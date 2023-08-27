import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import AdbIcon from "@mui/icons-material/Adb";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Link from "next/link";
import AnimatedElement1 from "./animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const banner1 = () => {
  return (
    <>
      <main>

      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image
                src={"/h1.png"}
                layout="responsive"
                alt="banner"
                objectFit="cover"
                height={100}
                width={100}
              />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                src={"/h2.png"}
                layout="responsive"
                objectFit="cover"
                height={100}
                alt="banner"
                width={100}
              />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                src={"/Orange And Blue Modern Professional Construction Banner Design.png"}
                layout="responsive"
                alt="banner"
                objectFit="cover"
                height={100}
                width={100}
              />
        </SwiperSlide>
        
      </Swiper>























        {/* <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
             
            </div>
            <div className="carousel-item">
              
            </div>
            <div className="carousel-item">
              <Image
                src={"/Orange And Blue Modern Professional Construction Banner Design.png"}
                layout="responsive"
                objectFit="cover"
                height={100}
                width={100}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </main>
    </>
  );
};
export default banner1;
