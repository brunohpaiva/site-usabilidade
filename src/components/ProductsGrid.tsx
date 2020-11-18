import React from 'react';
import Grid from "@material-ui/core/Grid";
import type {Product} from "../products";
import ProductCard from "./ProductCard";

interface ProductsGridProps {
  products: Product[];
}

function ProductsGrid({products}: ProductsGridProps) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <ProductCard product={product}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsGrid;