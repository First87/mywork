import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Head from "next/head";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import the product data arrays
// import { aluminumProducts, stainlessProducts, roofProducts } from "../../ProductsData";
import { stainlessProducts } from '../../component/productsData';

const defaultTheme = createTheme();

export default function Album() {
  // const productToShow = aluminumProducts.concat(stainlessProducts, roofProducts);

  return (
    <>
     <Head>
        <title>สแตนเลส| เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        <link rel="icon" href="nav.png" type="image/x-icon"></link>
      </Head>
    
    <ThemeProvider theme={defaultTheme}>
      <main>
        <div className="section-info">
          <h1>สแตนเลส</h1>
          <div className="line"></div>
        </div>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
          {stainlessProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <Link href={`/products/stainless/${product.id}`}>
                    <CardMedia
                    className='card-img'
                      component="img"
                      alt=""
                      height="150"
                      image={product.src}
                      sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
                    />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {product.title.length > 22? `${product.title.substring(0, 22)}...` : product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {product.detail.length > 20? `${product.detail.substring(0, 20)}...` : product.detail}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={`/products/stainless/${product.id}`}>
                      <Button className='ctn'>ดูรายละเอียด</Button>
                    </Link>
                  </CardActions>
                </Card>
               
              </Grid>
            ))}
          </Grid>
          
        </Container>
      </main>
    </ThemeProvider>
    </>
  );
}