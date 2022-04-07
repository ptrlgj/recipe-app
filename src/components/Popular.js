import React, { PureComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
function Popular() {
    
    const [popular, setPopular] = useState([]);

    useEffect(()=>{
        getPopular()
    },[])
    const getPopular = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await response.json()
        setPopular(data.recipes)
        // console.log(data.recipes)
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
                    <SplideSlide>
                        <Card key={recipe.id}>
                            <p>
                                {recipe.title}
                            </p>
                            <img src={recipe.image} alt={recipe.title} />
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

export default Popular