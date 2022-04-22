import React from 'react'
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material'
import { useUnit } from '../hooks/useUnit';

export default function DayCard(props) {
    const [convertDeg] = useUnit();
    let iconNum = props.day.Day.Icon>9 ? props.day.Day.Icon : "0" +  props.day.Day.Icon
    const minTemp = convertDeg(props.day.Temperature.Minimum.Value)
    const maxTemp = convertDeg(props.day.Temperature.Maximum.Value)

    return (
          <Card className='card'>
            <CardHeader className='cardTitle' title={new Date(props.day.Date).getDayOfWeek()}/>
            <CardMedia 
            className='cardImage'
            sx={{width:'100%'}}
            component="img"
            image={"https://developer.accuweather.com/sites/default/files/"+iconNum+"-s.png"}
            />
            <CardContent className='cardContent'>
            <h1>{minTemp +'° - '+maxTemp +'°'}</h1>
             <h2> {props.day.Day.IconPhrase}</h2>
            </CardContent>
          </Card>
  )
}

