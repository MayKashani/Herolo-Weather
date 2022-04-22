import { useState, useEffect} from "react"
import { useDispatch,useSelector} from "react-redux";
import store from '../redux/store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconText } from "./staticComponents";

export default function MainHeader() {
    const [isLiked,setIsLiked] = useState(false)
    const dispatch = useDispatch()
    const location = useSelector(state=>state.locationReducer)
    const styleClass = `favoriteIcon ${isLiked ? 'red' : ''}`

  useEffect(() => {
    if(store.getState().favoritesReducer.some(x => x.key===location.key))
      setIsLiked(true)
    else setIsLiked(false)
  }, [location])
  
    const toggleLike = () => {
      setIsLiked(!isLiked)
      if(!isLiked)
        dispatch({
          type:"ADD_FAVORITE",
          payload: {
            name:location.name,
            key:location.key,
            currentWeather:location.currentWeather
          }
        })
      else 
        dispatch({
          type:"REMOVE_FAVORITE",
          payload: {
            key: store.getState().locationReducer.key
          }
        })
  }
  
    return (
      <div style={{margin:'20px',display:"grid",gridTemplateColumns:"1fr auto"}}>
      <CurrentTemp location={location}/>
      <FavoriteIcon className={styleClass} onClick={()=>toggleLike()} ></FavoriteIcon>
      </div>
    )
  }
  

  const CurrentTemp = (props) => {
    return (
      <div style={{display:'flex',flexDirection:'row'}}>
        <IconText text={props.location.name}><LocationOnIcon/></IconText>
        <h4>{props.location.currentWeather}</h4>
      </div>
    )
  }