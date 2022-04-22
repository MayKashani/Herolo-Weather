import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconText } from './staticComponents'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudIcon from '@mui/icons-material/Cloud';
import { useUnit } from '../hooks/useUnit';
import { Fab } from '@mui/material';
export default function Header() {
  const [,toggleUnit,unit] = useUnit()

  return (
    <div className='header'>
        <IconText text='Herolo Weather'>
          <CloudIcon/>
        </IconText>
        
       
        <NavLink className='hoverAnimation' to='/' activeClassName='active' >
            <IconText text='Home'>
              <HomeIcon/>
            </IconText>  
        </NavLink>

        <NavLink className='hoverAnimation' to='/favorites' activeClassName='active'> 
            <IconText text='Favorites'>
              <FavoriteIcon/>
            </IconText>
        </NavLink>

        <Fab onClick={toggleUnit} style={{fontSize:'25px',fontWeight:'bold'}}>{unit.toUpperCase() + '°'}</Fab>

    </div>
  )
}


