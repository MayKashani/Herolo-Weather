import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from '../redux/actions'
import {useNavigate} from 'react-router-dom'
import {MyCard } from './smallComponents/StyledCard'
import { IconText } from './smallComponents/IconText'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

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
      {
      favorites.length>0 ?
          favorites.map(x=> 
          <MyCard title={x.name} handleClick={handleClick} key={x.key} data={x}>
              <h3>{x.weather}</h3>
          </MyCard>) : 
          <IconText text='There are no favorite locations'>
            <SentimentVeryDissatisfiedIcon style={{fontSize:'50px'}}/>
          </IconText>
    }
  </div>
  )
}
