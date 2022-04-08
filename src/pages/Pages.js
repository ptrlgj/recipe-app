import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Category from '../components/Category'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function Pages() {
  return (
    <BrowserRouter>
        <Category />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:cuisine" element={<Cuisine />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages