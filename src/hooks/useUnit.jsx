import { useSelector,useDispatch } from "react-redux"

export const useUnit = () => {
    const unit = useSelector(state=> state.unitReducer)
    const dispatch = useDispatch()
    
    const toggleUnit = () => {
      dispatch({type:"TOGGLE_UNIT"})
    }

  const convert = (deg) =>{
    deg = parseFloat(deg)
    if(unit==='c')
        return Math.round(deg/(5*9)+32)
    return deg;
  }

  return [convert,toggleUnit,unit]

}

