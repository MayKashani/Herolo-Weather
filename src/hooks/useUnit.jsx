import { useSelector,useDispatch } from "react-redux"
import { toggleUnit } from "../redux/actions"

export const useUnit = () => {
    const unit = useSelector(state=> state.settingsReducer.unit)
    const dispatch = useDispatch()
    
    const setUnit = () => {
      dispatch(toggleUnit())
    }

  const convert = (degree) =>{
    degree = parseFloat(degree)
    if(unit==='c')
        return Math.round((degree-32)*(5/9))
    return degree;
  }

  return {convert,setUnit,unit}

}

