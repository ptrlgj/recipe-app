import React from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import Category from '../components/Category'
function Home() {
  return (
    <div>
        <Category />
        <Popular />
        <Veggie />
    </div>
  )
}

export default Home