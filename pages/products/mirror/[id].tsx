import React from 'react';
import Head from 'next/head';
import { Button } from '@mui/material';
import { mirrorProducts } from '../../component/productsData';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

interface Product {
  id: string;
  src: string;
  title: string;
  detail: string;
}

interface ProductDetailsProps {
  productToShow: Product | undefined;
}

export default function ProductDetails({ productToShow }: ProductDetailsProps) {
  if (!productToShow) {
    return <div>Product not found</div>;
  }

  return (
    <>
     <Head>
        <title>รายละเอียด : {productToShow.title} | เสริมศิริ อลูมินั่ม & สแตนเลส</title>
        <link rel="icon" href="nav.png" type="icon" />
      </Head>
      <div className="section-info">
          <h1>รายละเอียดสินค้า</h1>
          <div className="line"></div>
        </div>
        <div className="container id-box">
          <hr className="hr1" />
          <div className="grid">
            <div className="item">
              <div className="content">
                <div>
                  <img
                    className="img-id-box"
                    style={{ width: '100%', height: '100%' }}
                    src={productToShow.src}
                    alt={productToShow.title}
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="content rounded-3">
                <div className="m-4 rounded-3 p-3">
                  <h3 className="mb-3">ชื่อสินค้า: {productToShow.title}</h3>
                  <h6 className="mb-3">รายละเอียด: {productToShow.detail}</h6>
                  <p className="mb-3">รหัสสินค้า: {productToShow.id}</p>
                </div>
                <Link href={`/products/mirror/products`}>
                  <Button className="ctn" variant="contained">
                    ย้อนกลับ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  const productToShow = mirrorProducts.find((product) => product.id === id);
  return {
    props: {
      productToShow,
    },
  };
}
