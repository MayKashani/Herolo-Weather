import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from '../redux/actions'
import {useNavigate} from 'react-router-dom'
import {MyCard } from './smallComponents/StyledCard'
import { IconText } from './smallComponents/IconText'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import styled from 'styled-components'

export default function Favorites() {
  const favorites = useSelector(state=>state.favoritesReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (x) => {
    dispatch(setLocation(x))
    navigate('/')
  }

  return (
    <div style={{display:"flex", flexDirection:'column',alignItems:'center'}}>
      <h1>Favorites</h1>
      {

      favorites.length>0 ?
        <List>
          {favorites.map(x=> 
          <MyCard title={x.name} handleClick={handleClick} key={x.key} data={x}>
              <h3>{x.weather}</h3>
          </MyCard>) 
        }       
        </List> : 
        <IconText text='There are no favorite locations'>
          <SentimentVeryDissatisfiedIcon style={{fontSize:'50px'}}/>
        </IconText>
      }

  </div>
  )
}


const List = styled.div`
background-color:transparent;
display:grid;

@media only screen and (min-width: 1000px)  {
    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
}

@media only screen and (min-width: 600px) and (max-width:1000px)  {
  grid-template-columns:1fr 1fr 1fr ;
}

@media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width:100vw;
    
}
`