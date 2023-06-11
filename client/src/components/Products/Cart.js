import React, { useEffect, useState } from 'react';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import axios from 'axios';

function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);
  const [res, setRes] = useState(false);
  console.log(cart);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handleOrder = () => {
    axios.post('http://localhost:3333/orders/', {
      price,
      title: localStorage.getItem('userEmail'),
      description: cart.length,
    }).then((response) => {
      console.log(response.data);
      setRes(true);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handlePrice = () => {
    let total = 0;
    cart.map((item) => (total += item.amount * item.price));
    setPrice(total);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div style={{ marginLeft: '3%', marginTop: '3%' }}>
      <Typography level="h1">Cart</Typography>
      <ul>
        {cart.map((item, index) => (
          <Card
            orientation="horizontal"
            variant="outlined"
            sx={{ width: 460, bgcolor: 'background.body', mb: 2 }}
          >
            <CardContent>
              <Typography
                fontWeight="md"
                textColor="success.plainColor"
                mb={0.5}
              >
                {item.name}
              </Typography>
              <Typography level="body2">
                Price of Item:
                {' '}
                {item.price}
              </Typography>
              <Typography>
                No. of Items:
                {item.amount}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  pt: 1,
                  borderTop: '1px solid',
                  borderColor: 'background.level1',
                }}
              >
                <IconButton
                  size="sm"
                  variant="outlined"
                  onClick={() => handleChange(item, -1)}
                >
                  <Remove />
                </IconButton>
                <Typography
                  sx={{ width: '50px', textAlign: 'center' }}
                  fontWeight="md"
                  textColor="text.secondary"
                >
                  {item.price}
                </Typography>
                <IconButton
                  size="sm"
                  onClick={() => handleChange(item, 1)}
                  variant="outlined"
                >
                  <Add />
                </IconButton>

                <IconButton
                  sx={{ float: 'right' }}
                  size="lg"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </IconButton>
              </Box>
            </CardContent>
            <CardOverflow
              variant="soft"
              color="primary"
              sx={{
                px: 0.2,
                writingMode: 'vertical-rl',
                textAlign: 'center',
                fontSize: 'xs2',
                fontWeight: 'xl2',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderLeft: '1px solid',
                borderColor: 'divider',
              }}
            >
              {item.category}
            </CardOverflow>
          </Card>
        ))}
      </ul>

      <div className="total">
        <span>Total Price of your Cart</span>
        <span>
          Rs -
          {price}
        </span>
                <br/>
        <Button onClick={handleOrder}>Place Order</Button>
        {res?<Typography>Order Placed</Typography>:<></>}
      </div>
    </div>
  );
}

export default Cart;
