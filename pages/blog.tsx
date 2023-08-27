import Image from "next/image";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
// import AnimatedTextWord from "./component/AnimatedTextWord";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "./component/slide";
import Head from 'next/head';
const Blog = () =>{
    return(
        <>
        <Head>
    <title>เรื่องน่ารู้ | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
    <link
        rel = "icon"
         href = "nav.png" 
        type = "icon">
    </link>
    </Head>
        <main>
        <br /><br /><br /><br />
        
            <div className="container">
              <h2>บทความ</h2>
            </div>
        <div className="container">
              <hr className="hr1" />
                </div>
                <div className="container">
               
                <h3>
                    Title1
                </h3>
                <br />
                </div>
          <div className="container">
            
          <h5>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronicWhat is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </h5>
            <br /><br /><br /><br />
          </div>
          <div className="container">
              <hr className="hr1" />
                </div>
                <div className="container">
               
                <h3>
                    Title2
                </h3>
                <br />
                </div>
          <div className="container">
            
          <h5>
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ItWhat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic has survived not only five centuries, but also the leap into electronic
                </h5>
            <br /><br /><br /><br />
          </div>
          <div className="container">
              <hr className="hr1" />
                </div>
                <div className="container">
               
                <h3>
                    Title
                </h3>
                <br />
                </div>
          <div className="container">
            
          <h5>
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </h5>
            <br /><br /><br /><br />
          </div>
        
          <div className="container">
              <hr className="hr1" />
                </div>
                <div className="container">
               
                <h3>
                    Title3
                </h3>
                <br />
                </div>
          <div className="container">
            
          <h5>
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </h5>
            <br /><br /><br /><br />
          </div>
        
          <div className="container">
              <hr className="hr1" />
                </div>
                <div className="container">
               
                <h3>
                    Title
                </h3>
                <br />
                </div>
          <div className="container">
            
          <h5>
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                </h5>
            <br /><br /><br /><br />
          </div>
        
        
       
          
        </main>
        </>
    )
}
export default Blog;