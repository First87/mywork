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
import h1  from "../../public/h1.png"
import h2  from "../../public/h2.png"
import h3  from "../../public/h3.png"

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
                src={h1}
                alt="banner"
                height={500}
                width={1600}
                style={{width:"100%",height:"auto"}}
              />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                src={h2}
                alt="banner"
                height={500}
                width={1600}
                style={{width:"100%",height:"auto"}}
                
              />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                src={h3}
                alt="banner"
                height={500}
                width={1600}
                style={{width:"100%",height:"auto"}}
              />
        </SwiperSlide>
        
      </Swiper>

      </main>
    </>
  );
};
export default banner1;
