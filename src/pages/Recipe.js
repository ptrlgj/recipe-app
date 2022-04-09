import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled  from 'styled-components'
function Recipe() {
    const params = useParams();
    const [recipe, setRecipe] = useState({});
    const [active, setActive] = useState('instructions');
    useEffect(()=>{
        fetchRecipe(params.id)
    },[params.id])
    const fetchRecipe = async (id) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const result = await response.json()
        setRecipe(result)
    }
  return (
      <DetailWrapper>
          <div>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
          </div>
          <Info>
              <div className='buttons'>
                    <Button 
                        onClick={() => setActive('instructions')}
                        className={active === 'instructions' ? 'active' : ''}
                        >Instructions</Button>
                    <Button
                        onClick={() => setActive('ingredients')}
                        className={active === 'ingredients' ? 'active' : ''}
                        >Ingredients</Button>
                </div>
                {active === "instructions" ? (
                    <div>
                        <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
                        <p dangerouslySetInnerHTML={{__html: recipe.instructions}}></p>
                    </div>) : (
                    <ul>
                        {recipe.extendedIngredients.map(ing => {
                            return <li key={ing.id}>{ing.original}</li>
                        })}
                    </ul>
                    )
                }
          </Info>
      </DetailWrapper>
  )
}

const DetailWrapper = styled.motion.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`;
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`
const Info = styled.div`
    margin-left: 10rem;
    .buttons{
        display: flex;
        align-items: flex-start;
    }
    p{
        padding: 0.5rem;
    }
`
export default Recipe