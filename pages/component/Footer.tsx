import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer">
      <Box
      component="footer"
      bgcolor={'#014073'}
      color={'#fff'}
    >
      <div className="container">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#FF9D34" gutterBottom>
              ที่อยู่
            </Typography>
            <Typography variant="body2" color="white">
              
            143/5-6 ม.4 ถ.สุขสวัสดิ์ ต.บางพึ่ง อ.พระประแดง จ.สมุทรปราการ 10130
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#FF9D34" gutterBottom>
              ติดต่อ
            </Typography>
            <Typography variant="body2" color="white">
            
            </Typography>
            <Typography variant="body2" color="white">
              Email: sermsirial@hotmail.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: 086-569-2289
              
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Typography variant="h6" color="#FF9D34" gutterBottom>
              ติดตามเรา
            </Typography>
            <div className="container icon-foot">
            <Link className="icon-foot-f" href="https://www.facebook.com/profile.php?id=100057451749957&ref=embed_page&_rdc=1&_rdr" >
            <FontAwesomeIcon icon={faSquareFacebook} style={{fontSize:'20px'}}/>
            </Link>
            
            <Link className="icon-foot-l" href="/" >
            <FontAwesomeIcon icon={faLine} style={{fontSize:'20px'}}/>
            </Link>
            </div>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography className="copyright" variant="body2" color="body" align="center">
            
           
            © Copyright 2023 Sermsiri Aluminum All rights reserved.
            
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </div>
    </Box>
    </div>
  );
}