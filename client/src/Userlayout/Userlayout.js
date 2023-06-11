import React, { useState, useEffect } from 'react';
import { Outlet ,Link} from "react-router-dom";
import AuthService from "../helpers/authService";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
export default function Userlayout() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    window.location.reload(true)
  };
  console.log(localStorage.getItem('user'));

  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  if(currentUser)
  localStorage.setItem('userEmail', parseJwt(localStorage.getItem('user')).email);

  // console.log(localStorage.getItem('userEmail'), ' email got it');

  return (
    <div>
      <div style={{ marginTop: '3%' }}>
        <Box sx={{
 display: 'flex', gap: 1, alignItems: 'center', ml: 3 
}}>
          {currentUser ? (
            <>
              <Chip variant="outlined" sx={{ backgroundColor: '#90EE90' }}>
                {' '}
                Logged In
{" "}
              </Chip>
              <Chip variant="solid" sx={{ color: '#fff', backgroundColor: '#d0342c' }} onClick={logOut}>
                {' '}
                Log Out
{" "}
              </Chip>
            </>
          ) : (
            <Chip variant="outlined" sx={{color:'#fff', backgroundColor: "#d0342c" }}>
                {" "}
                <Link to='/'>Log In to Place Orders</Link>{" "}
              </Chip>
          )}

          <Chip variant="soft">Token</Chip>
        </Box>

        <Outlet />
      </div>
    </div>
  );
}
