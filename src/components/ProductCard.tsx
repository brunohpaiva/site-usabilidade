import React from "react";
import NextLink from 'next/link';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import {formatCurrency} from "../utils/formatting";
import {Product, encodeProductName} from "../products";

interface ProductCardProps {
  product: Product;
}

function ProductCard({product}: ProductCardProps) {
  return (
    <Card>
      <NextLink href="/products/[...keys]" as={`/products/${product.id}/${encodeProductName(product.name)}`} passHref>
        <CardActionArea title={product.name}>
          <CardMedia
            component="img"
            image={product.image}
            height={300}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {formatCurrency(product.price)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
}

export default ProductCard;