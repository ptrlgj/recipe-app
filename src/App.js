import React from 'react'
import Pages from './pages/Pages'
import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import Category from './components/Category'
import Search from './components/Search'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav>
          <Logo to="/">
            <GiKnifeFork />
            recipe-app
          </Logo>
        </Nav>
        <Category/>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  )
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  `
const Nav = styled.nav`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }`
export default App