import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from '@mui/material';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AuthService from '../../helpers/authService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate('/dashboard');
          window.location.reload();
        },
        (error) => {
          console.log(error);
        },
      );
    } catch (err) {
      console.log(err);
    }
  };
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '20px auto',
  };
  const btnstyle = { margin: '8px 0' };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={handleLogin}
          >
            Sign in
          </Button>
         
        </Paper>
      </Grid>

    </div>
  );
}

export default Login;
