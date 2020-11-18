import React from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PageLayout from "../../components/PageLayout";
import PageContent from "../../components/PageContent";
import products, {Product, encodeProductName} from "../../products";

interface ProductPageProps {
  product: Product;
}

function ProductPage({product}: ProductPageProps) {
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL"
  });

  return (
    <>
      <Head>
        <title>{product.name} | MagesticStore</title>
      </Head>

      <PageLayout showSearch={false}>
        <PageContent maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={4}>
              <img src={product.image} width="100%"/>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box paddingLeft={4}>
                <Typography variant="h4" component="h4" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" component="p" gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant="h5" component="h5">
                  {formattedPrice}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </PageContent>
      </PageLayout>
    </>
  );
}

export function getStaticProps({params}) {
  const [id, name] = params.keys;
  const product = products.find(product => {
    return product.id == id && encodeProductName(product.name) == encodeProductName(name);
  }) ?? null;
  return {props: {product}};
}

export function getStaticPaths() {
  const paths = products.map(product => {
    return `/products/${product.id}/${encodeProductName(product.name)}`;
  });
  return {paths, fallback: false};
}

export default ProductPage;