import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'

function Category() {
  return (
    <List>
        <a>
            <FaPizzaSlice />
            <p>Italian</p>
        </a>
        <a>
            <FaHamburger />
            <p>American</p>
        </a>
        <a>
            <GiNoodles />
            <p>Thai</p>
        </a>
        <a>
            <GiChopsticks />
            <p>Japanese</p>
        </a>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;    
`
export default Category