import React, {useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {
  const [searchWord, setSearchWord] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/searched/${searchWord}`)
  }
  function handleChange(e) {
    setSearchWord(e.target.value)
  }
  return (
    <FormStyle
      onSubmit={handleSubmit}
    >
      <div>
        <FaSearch />
        <input 
          type = 'text'
          value = {searchWord}
          onChange = {handleChange}
        />
      </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
  margin: 0rem 20rem;

  div{
    position: relative;
    width: 100%;
  }
  
  input{
    width: 100%;
    border:none;
    outline: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
  } 

  svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search