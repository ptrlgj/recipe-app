import React, { PureComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom'
function Popular() {
    
    const [popular, setPopular] = useState([]);

    useEffect(()=>{
        getPopular()
    },[])
    const getPopular = async () => {
        const contentLocalStorage = localStorage.getItem('popularRecipes');

        if(contentLocalStorage){
            setPopular(JSON.parse(contentLocalStorage))
        }
        else{
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await response.json()
            localStorage.setItem('popularRecipes', JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
    }
  return (
    <Wrapper>
        <h3>Popular Picks</h3>
        <Splide 
            options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}
        >
            {popular.map(recipe => {
                return(
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={`/recipe/${recipe.id}`}>
                                <p>
                                    {recipe.title}
                                </p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                            </Link>
                        </Card>
                    </SplideSlide>
                )
            })}
        </Splide>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    margin: 4rem 0rem;
    `;
    const Card = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 2rem;
    min-height: 25rem;
    img {
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
` 
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`
export default Popular