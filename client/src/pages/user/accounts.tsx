import React, { useState } from "react";
import Navbar from "../../componet/navBar/nav-bar";
import { RootState } from '../../features/store'; // Update with the actual path

import AccountComponts from "../../componet/AccountComponets/accountComponts";
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
function Accounts() {

    const currentUser = useSelector((state: RootState) => state.userSlice.currentUser);
  
 
  
    
  return (
    <div>
      <Navbar navBarIndex={5} />

      <div style={{ justifyContent: "center"}}>
       
        <AccountComponts />
      </div>
    </div>
  );
}

export default Accounts;
