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
import Content from "./component/Content";
import Head from 'next/head';

// import AnimatedTextWord from "./component/AnimatedTextWord";

const Products = () => {
  // const textToAnimate = "";
  const textToAnimate = " Products";
  return (
    <>
    <Head>
      
      
    <title>สินค้าของเรา | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
    <link
        rel = "icon"
         href = "nav.png" 
        type = "image/x-icon">
    </link>
    </Head>
      <main>
        <Content/>
      </main>
    </>
  );
};
export default Products;
