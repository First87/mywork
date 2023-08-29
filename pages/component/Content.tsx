import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <>
      <section className="explore">
        <div className="explore-content">
          <h1>จัดส่งทั่วประเทศ</h1>
          <div className="line"></div>
          <p>
            เราเป็นศูนย์รวมอลูมิเนียมเส้น และสแตนเลส
            อุปกรณ์งานติดตั้งประตู-หน้าต่างกรอบอลูมิเนียมที่เกี่ยวข้องทุกชนิด
          </p>
          <a href="/products" className="ctn">
            สินค้าของเรา
          </a>
        </div>
      </section>

      {/* เก็บไว้ */}
      <div className="section-info">
        <h1>หมวดหมู่สินค้า</h1>
        <div className="line"></div>
      </div>

      <section className="container" id="categories">
        <Swiper
          autoplay={{ delay: 3000 }}
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          scrollbar={false}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card className="card-wrapper card-e" sx={{ maxWidth: 345 }}>
            <Link href={`/products/aluminum/products`}>
              <CardMedia
              className='card-img'
                  component="img"
                  alt="aluminum"
                  height="150"
                sx={{  objectFit: 'cover' }}
                image="/240_F_269626679_PCtGw6SvNauvCpj1K29k6LM64TZrIHvX.jpg"
                title="green iguana"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  อลูมิเนียม
                </Typography>
               
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
              </CardContent>
              <CardActions>
              <Link href={`/products/aluminum/products`}>
              <Button className="ctn" >ดูเพิ่มเติม</Button>
                </Link>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card-wrapper card-e" sx={{ maxWidth: 345 }}>
            
            <Link href={`/products/stainless/products`}>
              <CardMedia
              className='card-img'
                component="img"
                alt="stainless"
                height="150"
                sx={{  objectFit: 'cover' }}
                image="/240_F_228058339_aomLkeCUY43o7ZqUOMfL7U11qymtDt5d.jpg"
                title="green iguana"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  สแตนเลส
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
              </CardContent>
              <CardActions>
              <Button className="ctn" size="small">ดูเพิ่มเติม</Button>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card-wrapper card-e" sx={{ maxWidth: 345 }}>
            <Link href={`/products/mirror/products`}>
              <CardMedia
              className='card-img'
                component="img"
                alt="mirror"
                height="150"
                sx={{  objectFit: 'cover' }}
                image="/240_F_587041323_7IAIZwL8cuESqstFnI6f5AiK1gIG1Oo5.jpg"
                title="green iguana"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  กระจก
                </Typography>
               
              </CardContent>
              <CardActions>
              <Link href={`/products/mirror/products`}>
              <Button className="ctn" size="small">ดูเพิ่มเติม</Button>
                </Link>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card-wrapper card-e" sx={{ maxWidth: 345 }}>
            <Link href={`/products/accessoriesstainless/products`}>
              <CardMedia
              className='card-img'
                component="img"
                alt="acc"
                height="150"
                sx={{  objectFit: 'cover' }}
                image="/New Project (1).png"
                title="green iguana"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  อุปกรณ์ตกแต่งสแตนเลส
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
              </CardContent>
              <CardActions>
              <Link href={`/products/accessoriesstainless/products`}>
              <Button className="ctn" size="small">ดูเพิ่มเติม</Button>
                </Link>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card-wrapper card-e" sx={{ maxWidth: 345 }}>
            <Link href={`/products/ceilingtools/products`}>
              <CardMedia
              className='card-img'
                component="img"
                alt="celling"
                height="150"
                sx={{  objectFit: 'cover' }}
                image="/240_F_301569991_N5TmXhFkSnnxz3gyR7Rwh6eVibAYi8Gv.jpg"
                title="green iguana"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  งานฝ้าและเครื่อมือช่าง
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
              </CardContent>
              <CardActions>
              <Link href={`/products/ceilingtools/products`}>
                <Button className="ctn" size="small">ดูเพิ่มเติม</Button>
                </Link>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="card-wrapper card-e" sx={{ maxWidth: 345 }}>
            <Link href={`/products/roof/products`}>
              <CardMedia
              className='card-img'
                component="img"
                alt="roof"
                height="150"
                sx={{  objectFit: 'cover' }}
                image="/images.jpeg"
                title="green iguana"
              />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  แผ่นหลังคา
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
              </CardContent>
              <CardActions>
              <Link href={`/products/roof/products`}>
                <Button className="ctn" size="small">ดูเพิ่มเติม</Button>
                </Link>
              </CardActions>
            </Card>
          </SwiperSlide>
        </Swiper>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="container" id="featured-products">
        <div className="section-info">
          <h1>เราพร้อมให้บริการ</h1>
          <div className="line"></div>
        </div>
        <div className="products">
          <div className="product">
            <div className="product-info">
              {/* <p>Test1</p>
              <h3>first</h3> */}
            </div>
            <Image
              src="/240_F_100037121_xwLqenneMugbpZlMkZqcSeFmP4V4pUkc.jpg"
              height={300}
              alt="banner"
              width={300}
              style={{width:"100%" , height:"auto"}}
            />
          </div>

          <div className="product">
            <Image
              src="/240_F_135801329_d3tQg6StEkoG09Lv9Fmvyb6CsyE84gGY.jpg"
              alt="img"
              height={300}
              width={300}
              style={{width:"100%" , height:"auto"}}
            />
            <div className="product-info">
              {/* <p>Test2</p>
              <h3>first</h3> */}
            </div>
          </div>

          <div className="product">
            <div className="product-info">
              {/* <p>Test</p>
              <h3>first</h3> */}
            </div>
            <Image
              src="/240_F_151775100_t5YuolbNFago8DZQ2Bo7VviEEOB39nKs.jpg"
              alt="img"
              height={300}
              width={300}
              style={{width:"100%" , height:"auto"}}
            />
          </div>
        </div>
      </section>
    </>
  );
}
