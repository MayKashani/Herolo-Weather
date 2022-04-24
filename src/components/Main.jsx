import React, { useEffect,useState } from 'react'
import CardList from '../components/CardList'
import MainHeader from '../components/MainHeader'
import { useSelector} from 'react-redux'
import AutocompleteComp from './Autocomplete';
import { SnackbarAlert } from './smallComponents/Alert';


// 'AbaCXrNWwzsPAN1ZTAIAXluOHuWHhABl'
const API_KEY ='UkzOVeJRGoKNfEpcnCVEWe3qLSd5atJR'
Date.prototype.getDayOfWeek = function(){   
  return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][ this.getDay() ];
};


export default function Main() {
    const [weather,setWeather] = useState(null)
    const [forecasts,setForecasts] = useState(null)
    const location = useSelector(state=>state.locationReducer)
    const alert = useSelector(state=>state.alertsReducer)

    useEffect(() => {
      fetch("http://dataservice.accuweather.com/currentconditions/v1/"+location.key+"?apikey="+API_KEY)
      .then(res=>res.json())
      .then(res=> 
        setWeather(res[0].Temperature.Imperial.Value + ' ' + res[0].Temperature.Imperial.Unit)
      )
      .then(fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+location.key+"?apikey="+API_KEY)
      .then(res=>res.json())
      .then(res=> setForecasts(Object.values(res.DailyForecasts))))
      .catch(err=>console.log)
    },[location])
    

    useEffect(() => {
      // if('geolocation' in navigator) {
      //   navigator.geolocation.getCurrentPosition((position)=> {
      //     let currentLocation = position.coords.latitude+','+position.coords.longitude
      //     fetch('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey='+API_KEY+'&q='+currentLocation)
      //     .then(res=>res.json())
      //     .then(res=> dispatch(setLocation({name: res.EnglishName, key:res.Key})))
      //     .catch(err=>console.log(err))
      //   })
      // }
        //fetch tlv weather...
        // fetch('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%20UkzOVeJRGoKNfEpcnCVEWe3qLSd5atJR&q=tel-aviv')
        // .then(res=> res.json())
        // .then(res=> setLocation(res))
        // .catch(err=> console.log(err))
      //   let tempWeather = tlvWeatherConst[0].Temperature.Metric
      //  dispatch(setLocation({name:'Tel Aviv',  currentWeather:tempWeather.Value +' '+tempWeather.Unit,key:location.key}))
      //  setWeather({name:'Tel Aviv', currentWeather:tempWeather.Value +' '+tempWeather.Unit,id:location.key})
      //  setForecasts(Object.values(tlvForecast.DailyForecasts))
    }, [])

  return (

    <div style={{display:"flex", flexDirection:'column',alignItems:'center'}}>
      {alert!==null && <SnackbarAlert/>}
      <AutocompleteComp/>
     { weather!==null && <MainHeader data={weather}></MainHeader>}
      <h1 style={{textAlign:"center"}}>Scattered clouds</h1>
       {forecasts && <CardList data={forecasts}></CardList>}
    </div>
  )
}




//later

const tlv_key = '215854'
const tlv_req = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%20UkzOVeJRGoKNfEpcnCVEWe3qLSd5atJR&q=tel-aviv'
const tlvWeatherConst = [
  {
    "LocalObservationDateTime": "2022-04-19T11:43:00+03:00",
    "EpochTime": 1650357780,
    "WeatherText": "Clouds and sun",
    "WeatherIcon": 4,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 20.1,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 68,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
  }
]
const tlvWeather_req = "http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=UkzOVeJRGoKNfEpcnCVEWe3qLSd5atJR"
const tlvForecast = {
  "Headline": {
    "EffectiveDate": "2022-04-19T08:00:00+03:00",
    "EffectiveEpochDate": 1650344400,
    "Severity": 4,
    "Text": "Noticeably cooler Tuesday",
    "Category": "cooler",
    "EndDate": "2022-04-19T20:00:00+03:00",
    "EndEpochDate": 1650387600,
    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2022-04-19T07:00:00+03:00",
      "EpochDate": 1650340800,
      "Temperature": {
        "Minimum": {
          "Value": 67,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 73,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
    },
    {
      "Date": "2022-04-20T07:00:00+03:00",
      "EpochDate": 1650427200,
      "Temperature": {
        "Minimum": {
          "Value": 61,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 69,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 2,
        "IconPhrase": "Mostly sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
    },
    {
      "Date": "2022-04-21T07:00:00+03:00",
      "EpochDate": 1650513600,
      "Temperature": {
        "Minimum": {
          "Value": 59,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 68,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
    },
    {
      "Date": "2022-04-22T07:00:00+03:00",
      "EpochDate": 1650600000,
      "Temperature": {
        "Minimum": {
          "Value": 63,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 75,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
    },
    {
      "Date": "2022-04-23T07:00:00+03:00",
      "EpochDate": 1650686400,
      "Temperature": {
        "Minimum": {
          "Value": 63,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 73,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 3,
        "IconPhrase": "Partly sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
    }
  ]
}
const tlvForecast_req = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=UkzOVeJRGoKNfEpcnCVEWe3qLSd5atJR"
