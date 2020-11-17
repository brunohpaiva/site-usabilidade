import React from "react";
import products, {Product, encodeProductName} from "../../products";

interface ProductPageProps {
  product: Product;
}

function ProductPage({product}: ProductPageProps) {
  return (
    <h1>
      produto page {product.name}
    </h1>
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