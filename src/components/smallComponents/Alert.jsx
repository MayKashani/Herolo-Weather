import {useDispatch, useSelector} from 'react-redux'
import { Snackbar,Alert,AlertTitle } from '@mui/material';
import { setAlert } from '../../redux/actions'

export const SnackbarAlert = () => {
    const dispatch = useDispatch();
    const alert = useSelector(state=>state.alertsReducer)
  
    return (
    <Snackbar 
      open={true} autoHideDuration={6000}
      anchorOrigin={{vertical:"top",horizontal:'left'}}
      onClose={()=>dispatch(setAlert(null))}
      sx={{width:'100%'}}
    >
      <Alert variant='filled' severity={alert.severity}>
          <AlertTitle sx={{fontSize:'20px'}}>{alert.message}</AlertTitle>
      </Alert>
    </Snackbar>
    )
  }