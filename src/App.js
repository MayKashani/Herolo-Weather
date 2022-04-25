import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Favorites from './components/Favorites';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { setLocation } from './redux/actions'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux';

const API_KEY ='UkzOVeJRGoKNfEpcnCVEWe3qLSd5atJR'

export const lightTheme = {
    bg:  'linear-gradient(to bottom right, #489aec, #019CAD,#0cb798)',
    color:'black'
}
export const darkTheme = {
    bg: 'linear-gradient(to bottom right,#202020,#212a2b,#4e5554)',
    color:'white'
}



function App() {
  const settings = useSelector(state=>state.settingsReducer)
  const dispatch = useDispatch()

    useEffect(() => {
      if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position)=> {
          let currentLocation = position.coords.latitude+','+position.coords.longitude
          fetch('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey='+API_KEY+'&q='+currentLocation)
          .then(res=>res.json())
          .then(res=> dispatch(setLocation({name: res.EnglishName, key:res.Key})))
          .catch(err=>console.log(err))
        })
      }
      else {
        fetch("http://dataservice.accuweather.com/currentconditions/v1/215854?apikey="+API_KEY)
        .then(res=> dispatch(setLocation({name:'Tel Aviv',  currentWeather:res[0].Temperature.Value +' '+res[0].Temperature.Unit,key:'215854'})))
        .catch(err=> console.log(err))
      }
    },[])

  return (
    <BrowserRouter>
    <ThemeProvider theme={settings.mode==='light' ? lightTheme : darkTheme}>
    <Container>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
    </Container>
    </ThemeProvider>
    </BrowserRouter>
  

  );

}

export default App;


const Container = styled.div`
display:flex;
width:100vw;
flex-direction:column;
background-image: ${props=>props.theme.bg};
margin: 0;
width:100vw;
height:100vh;
background-attachment: fixed;
padding: 0px;
`