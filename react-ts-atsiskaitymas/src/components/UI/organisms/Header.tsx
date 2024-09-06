import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import UserContext, { UserContextTypes } from "../../../contexts/UserContext";
import { useContext, useState } from "react";
import Button from "../atoms/Button";

const HeaderStyled = styled.header`
      display:flex;
      justify-content: space-between;
      align-items: center;

      height: 80px;
      
      padding: 0 20px;
      border-bottom: 1px solid black;

      > .userOptions{
        display: flex;
        align-items: center;

        > div{
          display: flex;
          align-items: center;
          gap: 20px;
          height: 60px;
          
          > img{
            border-radius: 20px;
            height: 100%;
            object-fit: contain;
            }
            >button{
              
          }
        } 
      }
  `;




const Header = () => {
  const navigation = useNavigate();

  const { userLoginData, logout } = useContext(UserContext) as UserContextTypes;

  return (

    <HeaderStyled>
      <div>Logo</div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add</NavLink>
      </nav>
      <div className="userOptions">
        {userLoginData ?
          <div className="userInfo">
            <button
              onClick={() => {
                logout();
                navigation('/');
              }}

            >Logout</button>
            Register
            <Button onClick={() => {
              logout()
              navigation('/');
            }} 
              text="Login" 
              />
            <img onClick={() => navigation('/user')} src="/media/mouse.png" alt="userPic" />
          </div> : <div>
            <Button onClick={() => navigation('/login')} text="Login" />
            <Button onClick={() => navigation('/register')} text="Register" />
          </div>
        }
      </div>
    </HeaderStyled>
  );
}

export default Header;