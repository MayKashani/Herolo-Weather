import { useUnit } from '../../hooks/useUnit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { useSelector } from "react-redux";
import { IconText } from "./IconText";

//Main header temperature
export const Degree = (props) => {
    const location = useSelector(state=> state.locationReducer)
    const {convert} = useUnit()
  
    return (
      <div>
        <IconText text={location.name}><LocationOnIcon/></IconText>
        <IconText text={convert(props.data)}><ThermostatIcon></ThermostatIcon></IconText>
      </div>
    )
  }
  