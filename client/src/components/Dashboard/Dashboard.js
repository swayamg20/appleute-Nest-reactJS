import React, { useState, useEffect } from 'react';
import { productData } from '../Products/List';
import Fab from '@mui/material/Fab';
import Badge from '@mui/joy/Badge';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import './dashboard.css';
import Grid from '@mui/joy/Grid';
import Cloud from '@mui/icons-material/Cloud';
import Sun from '@mui/icons-material/LightMode';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from '../Products/Cards';

// eslint-disable-next-line react/prop-types
export default function Dashboard({ badgeCount, handleClick }) {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  // const [badgeCount, setBadgeCount] = useState(0);
  useEffect(() => {
    setData(productData);
  }, []);

  console.log(data);

  // const handleClick = (item) => {
  //   cart.push(item);
  //   console.log(cart.length);
  //   setBadgeCount(badgeCount + 1);

  //   }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <div>
        <Box sx={{
          display: 'flex', gap: 1, alignItems: 'center', mb: 4, ml: 3, mt: 3,
        }}
        >
          <Badge badgeContent={badgeCount} color="primary">
            <Chip variant="solid" color="primary">
              <Link to="/cart" style={{ textDecoration: 'none', color: '#fff', fontSize: '20px' }}>
                {' '}
                <AddShoppingCartIcon sx={{ m: 2 }} fontSize="large" />
              </Link>
            </Chip>

          </Badge>

        </Box>

        <Grid container spacing={2} sx={{ flexGrow: 1, width: '100%' }}>
          {productData.map((item) => (

            <div className="parents">

              <ProductCard key={item.id} product={item} handleClick={handleClick} />

            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}
