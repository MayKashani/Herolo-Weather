import React, { useEffect,useState } from 'react'
import CardList from '../components/CardList'
import MainHeader from '../components/MainHeader'
import { useDispatch, useSelector} from 'react-redux'
import AutocompleteComp from './Autocomplete';
import { SnackbarAlert } from './smallComponents/Alert';
import styled from 'styled-components'
import { setCurrentWeather } from '../redux/actions';
import { API_KEY } from '../api/globals';


Date.prototype.getDayOfWeek = function(){
  return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][ this.getDay() ];
};


export default function Main() {
    //const [weather,setWeather] = useState(null)
    const [forecasts,setForecasts] = useState(null)
    const location = useSelector(state=>state.locationReducer)
    const alert = useSelector(state=>state.alertsReducer)
    const weather=useSelector(state=>state.weatherReducer)
    const dispatch = useDispatch()

    useEffect(() => {
      fetch("https://dataservice.accuweather.com/currentconditions/v1/"+location.key+"?apikey="+API_KEY)
      .then(res=>res.json())
      .then(res=>{
        dispatch(setCurrentWeather({...location,weather:res[0].Temperature.Imperial.Value + ' ' + res[0].Temperature.Imperial.Unit}))
        //setcurrentWeather(res[0].Temperature.Imperial.Value + ' ' + res[0].Temperature.Imperial.Unit)
          console.log(weather)
        }  )
      .then(fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+location.key+"?apikey="+API_KEY)
      .then(res=>res.json())
      .then(res=> setForecasts(Object.values(res.DailyForecasts))))
      .catch(err=>console.log)
    },[location])



  return (

    <div style={{display:"flex", flexDirection:'column',alignItems:'center'}}>
      {alert!==null && <SnackbarAlert/>}
      <AutocompleteComp/>
     { weather!==null && <MainHeader></MainHeader>}
      <Title>Scattered clouds</Title>
       {forecasts && <CardList data={forecasts}></CardList>}
    </div>
  )
}


const Title = styled.h1`
color:${props=>props.theme.color};
text-align: center;
`
