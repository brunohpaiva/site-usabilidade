import React from "react";
import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import PageContent from "../../components/PageContent";
import products, {Product, encodeProductName} from "../../products";
import withSearch from "../../withSearch";

interface ProductPageProps {
  product: Product;
}

function ProductPage({product}: ProductPageProps) {
  return (
    <>
      <Head>
        <title>{product.name} | MagesticStore</title>
      </Head>

      <PageLayout showSearch={false}>
        <PageContent maxWidth="lg">
          produto page {product.name}
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