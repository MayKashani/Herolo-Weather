import { useUnit } from '../../hooks/useUnit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { useSelector } from "react-redux";
import { IconText } from "./IconText";

//Main header temperature
export const Degree = () => {
    const currentWeather = useSelector(state=>state.weatherReducer)
    const {convert} = useUnit()
    console.log(currentWeather)
    return (
      <div>
        <IconText text={currentWeather.name}>
          <LocationOnIcon/>
        </IconText>
        <IconText text={convert(currentWeather.weather)}>
          <ThermostatIcon/>
        </IconText>
      </div>
    )
  }
  