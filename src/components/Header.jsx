import React from 'react'
import { NavItem} from './smallComponents/NavItem';
import { IconText } from './smallComponents/IconText';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudIcon from '@mui/icons-material/Cloud';
import { useUnit } from '../hooks/useUnit';
import { toggleMode } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';


export default function Header() {
  const {setUnit,unit} = useUnit()
  const {mode} = useSelector(state=> state.settingsReducer)
  const dispatch = useDispatch()

  return (
    <StyledHeader>
      <IconText text='Herolo Weather'><CloudIcon/></IconText>
      
      <Nav>
      <NavItem to='/' text='Home'><HomeIcon/></NavItem>
        <NavItem to='/favorites' text='Favorites'><FavoriteIcon/></NavItem> 
          <IconButton onClick={setUnit} >{unit.toUpperCase() + '°'}</IconButton>
        <IconButton onClick={()=>dispatch(toggleMode())}>
          {mode==='light'? <LightModeIcon/>
          : <DarkModeIcon/> }</IconButton>
      </Nav>
    </StyledHeader>
  )
}





const StyledHeader = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-weight:600;
  align-items:center;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
  transition: all .3s;
  padding: 8px;
  width:100%;

  @media only screen and (min-width: 800px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 800px) {
    justify-content:center;
    flex-direction:column;
  }
`

const Nav = styled.div`
  display:flex;
  flex-direction:row;

  @media only screen and (min-width: 800px) {
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 800px) {
    justify-content:center;
    flex-direction:row;
    flex-wrap:no-wrap
  }
`