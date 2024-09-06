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

      > .logo{      
      height: 70px;
      >img{
      border: 1px solid black;
        border-radius: 10px;
        height: 100%
        }
      }

      a{
        text-decoration: none;
      }

      a.active{
        border-bottom: 3px solid black
      }

      >nav{
        >a{ 
        margin: 0 10px
        }
      }

      > .userOptions{
        display: flex;
        align-items: center;
        > a.active{
         border-bottom: 3px solid black
        }

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
      <div className="logo">
        <img src="./media/mouse.png" alt="logo" />
      </div>
      
      <nav>
        <NavLink to='/'>Home</NavLink>
        {!userLoginData ? <span>Add</span> : <NavLink to='/add'>Add</NavLink>}
      </nav>

      <div className="userOptions">
        {userLoginData ? 
            <div className="userInfo">
            <Button onClick={() => {
              logout()
              navigation('/');
              }} 
              text="Logout" 
              />
              <NavLink to='/user'>{userLoginData.name}</NavLink>
            <img onClick={() => navigation('/user')} src={userLoginData.userImg} alt="userPic" />
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