import React from 'react';
// import { CartContext } from "./CartContext";
import '../Dashboard/dashboard.css';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

// eslint-disable-next-line react/prop-types
function ProductCard({ product, handleClick }) {
  return (
    <>
      <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body3">{product.category}</Typography>
          <Typography fontWeight="xl">{product.name}</Typography>

          <Typography fontSize="xl" fontWeight="xl" sx={{ mt: 1 }}>
            {product.price}
            {' '}
            THB
          </Typography>
          <Typography level="body2">
            (Only
            {' '}
            <b>7</b>
            {' '}
            left in stock!)
          </Typography>
        </CardContent>
        <CardOverflow>
          <Button
            onClick={() => handleClick(product)}
            variant="solid"
            color="danger"
            size="lg"
          >
            Add to cart
          </Button>
        </CardOverflow>
      </Card>
      <Grid />
    </>
  );
}

export default ProductCard;
