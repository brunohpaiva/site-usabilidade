import React from "react";
import Head from 'next/head';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import PageLayout from "../components/PageLayout";
import PageContent from "../components/PageContent";
import Jumbotron from '../components/Jumbotron';
import ProductsGrid from "../components/ProductsGrid";
import products from "../products";
import withSearch from "../withSearch";

const bestSellersProducts = products.filter(product => typeof product.bestSeller === "boolean" && product.bestSeller);
const saleProducts = products.filter(product => typeof product.sale === "boolean" && product.sale);
const newProducts = products.filter(product => typeof product.new === "boolean" && product.new);

const sectionUseStyles = makeStyles(theme => ({
  section: {
    paddingBottom: theme.spacing(3)
  }
}));

function Section({title, children}: React.PropsWithChildren<{ title?: string; }>) {
  const classes = sectionUseStyles();
  return (
    <section className={classes.section}>
      {title && <Typography variant="h4" component="h3" gutterBottom>
        {title}
      </Typography>}
      {children}
    </section>
  );
}

function IndexPage() {
  return (
    <>
      <Head>
        <title>Home | MajesticStore</title>
      </Head>

      <PageLayout>
        <Jumbotron title="MajesticStore"
                   subtitle="Loja online de camisas, entregas para todo o Brasil."/>
        <PageContent>
          <Section title="Mais vendidos">
            <ProductsGrid products={bestSellersProducts}/>
          </Section>
          <Section title="Novos">
            <ProductsGrid products={newProducts}/>
          </Section>
          <Section title="Em promoção">
            <ProductsGrid products={saleProducts}/>
          </Section>
          <Section title="Todos">
            <ProductsGrid products={products}/>
          </Section>
        </PageContent>
      </PageLayout>
    </>
  )
}

export default withSearch(IndexPage);