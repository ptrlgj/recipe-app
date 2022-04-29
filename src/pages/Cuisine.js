import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import styled from 'styled-components'

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();
    useEffect(()=>{
      getCuisine(params.cuisine)
    },[params.cuisine]);

    const getCuisine = async cuisineType => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineType}`);
        const data = await response.json();
        setCuisine(data.results);
    }
  return (
    <Grid>
      {cuisine.map(recipe =>{
        return <Card key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Link>
        </Card>
      })}
    </Grid>
  )
}
 const Grid = styled.motion.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
 `
 const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem
  }
 `

export default Cuisine

