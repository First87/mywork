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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Link from "next/link";
import Head from 'next/head';
const Contact = () =>{
    return(
        <>
        <Head>
    <title>ติดต่อเรา | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
    <link
        rel = "icon"
         href = "nav.png" 
        type = "icon">
    </link>
    </Head>
        <main>
        <div className="container"> 
        <br /><br />
        <div className="section-info">
        <h1>เสริมศิริ อลูมินั่ม & สแตนเลส เราพร้อมให้บริการา</h1>
        <div className="line"></div>
      </div>
        {/* <h3 className="text-contact p-5">&nbsp;เสริมศิริ อลูมินั่ม & สแตนเลส เราพร้อมให้บริการ</h3> */}

          <div className="d-grid  grid-box">
            <div className="">
              <div className="container-fluid text-start ">
                <h2
                  id="about"
                  className="tex"
                  style={{ color: "black", fontSize: "35px",fontWeight:"bold" }}
                > 
                 
                </h2>
                <div className="container-fluid icon-contact">
                <h4>
                &nbsp;&nbsp;&nbsp;&nbsp;ศูนย์บริการลูกค้า
                <br /><br />
                </h4>
                <div className="container">
                <ul>
                    <li>
                    <h6 style={{fontSize:'24px'}}>
                  <FontAwesomeIcon icon={faPhone} shake style={{color: "#bb0707",fontSize:'30px' }} /> :  086-569-2289
                 
                  </h6>
                    </li>
                    <li>
                    <h6 style={{fontSize:'25px'}}>
                  <FontAwesomeIcon icon={faEnvelope} beatFade
                style={{color: "#bb0707",fontSize:'30px' }} /> : sermsirial@hotmail.com
                </h6>
                    </li>
                    <li>
                    <h6 style={{fontSize:'25px'}}>
                  <FontAwesomeIcon icon={faLine} bounce
                style={{ color: 'green',fontSize:'30px' }} /> : Sermsirisl
                </h6>
                    </li>
                    <li>
                    <h6 style={{fontSize:'25px'}}>
                  <FontAwesomeIcon icon={faLine} bounce
                style={{ color: 'green',fontSize:'30px' }} /> : <Image src={"/qr.png"} alt="qr" width={150} height={150}/>
                </h6>
                    </li>
                    <li>
                    <Link href="https://www.facebook.com/profile.php?id=100057451749957&ref=embed_page&_rdc=1&_rdr"
                style={{textDecoration:'none',color:'black'}}>
                <h6 style={{fontSize:'25px'}}>
                 <FontAwesomeIcon icon={faSquareFacebook} bounce style={{color: "#0955d7",fontSize:'30px' }} />  : เสริมศิริ อลูมิเนียมและ สแตนเลส
                </h6>
                  </Link>
                    </li>
                    </ul>
                </div>
                </div>
              </div>
            </div>
            <div>
              
            </div>
          </div>
          <br />
          <div className="container-fluid">
            <iframe
            className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248199.5953859083!2d100.23405029453123!3d13.58956070000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a7ac99e51c57%3A0xbe3a174e20cea817!2z4LiV4Lix4LmJ4LiH4Lio4Li04Lij4Li0IOC4quC5geC4leC4meC5gOC4peC4qg!5e0!3m2!1sth!2sth!4v1691245295445!5m2!1sth!2sth"
              width="50%"
              height="300"
              style={{borderRadius:'20px'}}
            ></iframe>
            <br /><br />
          </div>
          <div className="container sm">
         
          <br /><br />
          </div>
        </div>
        </main>
        </>
        
    )
}
export default Contact