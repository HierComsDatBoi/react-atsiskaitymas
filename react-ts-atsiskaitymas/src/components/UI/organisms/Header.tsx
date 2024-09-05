import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
          height: 60px;
          padding: 0 20px;

          > img{
            border-radius: 20px;
            height: 100%;
            object-fit: contain;
          }
        } 
      }
  `;

const Header = () => {
  return (

    <HeaderStyled>
      <div>Logo</div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add</NavLink>
      </nav>
      <div className="userOptions">
        <NavLink to='/user'>User</NavLink> {/* conditional */}
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <div>
          <img src="/media/mouse.png" alt="userPic" />
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;