import { useState, useEffect} from "react"
import { useDispatch,useSelector} from "react-redux";
import store from '../redux/store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Degree } from "./smallComponents/Degree";
import styled from 'styled-components'
import { addFavorite,removeFavorite } from "../redux/actions";
import { SnackbarAlert } from "./smallComponents/Alert";
import { setAlert } from "../redux/actions";

export default function MainHeader(props) {
    const [isLiked,setIsLiked] = useState(false)
    const dispatch = useDispatch()
    const location = useSelector(state=>state.locationReducer)
    const alert = useSelector(state=>state.alertsReducer)
    const color = isLiked ? 'red' : ''
    const weather = useSelector(state=> state.weatherReducer)

  useEffect(() => {
    if(store.getState().favoritesReducer.some(x => x.key===location.key))
      setIsLiked(true)
    else setIsLiked(false)
  }, [location])
  
    const toggleLike = () => {
      setIsLiked(!isLiked)
      if(!isLiked)
      {
        dispatch(addFavorite(weather))
        dispatch(setAlert({severity:'success',message:'Added to favorites'}))
      }
      else {
        dispatch(removeFavorite(location.key))
        dispatch(setAlert({severity:'error',message:'Deleted from favorites'}))
      }
  }
  
    return (
      <div style={{display:'flex', flexDirection:'row',width:'100%',justifyContent: 'space-between'}}>
      <Degree/>
      <FavoriteButton color={color} onClick={()=>toggleLike()}/>
      {alert && <SnackbarAlert/>}
      </div>
    )
  }
  



  const FavoriteButton = styled(FavoriteIcon)`
  font-size: 50px!important;
  cursor: pointer;
  transition: all 0.3s ease!important;
  filter: drop-shadow(0 0 5px rgba(0,0,0,.4));
  color: ${props=>props.color? 'red' : props.theme.color}
`
