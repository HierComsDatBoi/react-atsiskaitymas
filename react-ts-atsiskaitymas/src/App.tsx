import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Add from './components/pages/Add';
import User from './components/pages/User';
import Header from './components/UI/organisms/Header';
import Footer from './components/UI/organisms/Footer';

import UserContext, {UserContextTypes} from './contexts/UserContext';

const MainStyled = styled.main`
min-height: calc(100vh - (81px + 61px));
`;

function App() {

  return (
    <>
      <Header />
      <MainStyled>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> 
        <Route path='/add' element={<Add />} />
        <Route path='/user' element={<User />} />
      </Routes>
      </MainStyled>
      <Footer />
    </>
  );
}

export default App;
