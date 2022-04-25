import React from 'react'
import { MyCard } from './smallComponents/StyledCard';
import { useUnit } from '../hooks/useUnit';

export default function DayCard(props) {
    const {convert} = useUnit();
    const icon = props?.day?.Day?.Icon;
    let iconNum =icon && icon > 9 ? icon : "0" +  icon
    let minTemp = convert(props.day.Temperature.Minimum.Value)
    let maxTemp = convert(props.day.Temperature.Maximum.Value)

    return (
      <MyCard 
        title={new Date(props.day.Date).getDayOfWeek()} 
        media={iconNum && `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`}
        >
              <div>{minTemp}° - {maxTemp}°</div>
             <div>{props.day.Day.IconPhrase}</div>
      </MyCard>
  )
}

