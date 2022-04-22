import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { Input, List,ListItem,ListItemButton,ListItemIcon } from '@mui/material';
import { useEffect } from 'react';
import store from '../redux/store';
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

export default function Autocomplete(props)
{
    const [inputValue, setInputValue] = useState('');
    const [options,setOptions] = useState([])
    const favorites = useSelector(state=> state.favoritesReducer)
    
    const debouncedSave = useCallback(
        debounce((newValue) =>{
            fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%20UkzOVeJRGoKNfEpcnCVEWe3qLSd5atJR&q="+newValue)
            .then(res=> res.json())
            .then(res=>setOptions(res))
            .catch(err=>console.log(err))
        }, 3000),
        []
    );

    const updateValue = (newValue) => {
        setInputValue(newValue);
        debouncedSave(newValue);
    };

    const setLocation = (e) => {
        setInputValue(e.target.getAttribute("name"))
        store.dispatch({
            type:"SET_LOCATION",
            payload: {
              name:e.target.getAttribute("name"),
              key:e.target.getAttribute("id"),
            }
          })
          setOptions([])
    }


    return (
        <div style={{width:'80vw',margin:'0 auto',display:'grid', gridTemplateRows:'1fr auto'}}>
            <form style={{padding:'10px 30px',margin:'50px',display:'flex'}}>
            <span style={{position:'absolute',padding:'15px',fontSize:'28px'}}><SearchIcon style={{fontSize:'28px'}}></SearchIcon></span>
                <input 
                style={{backgroundColor:'white',borderRadius:'30px',width:'80%',padding:'10px 50px',fontSize:'28px'}}
                value={inputValue}
                placeholder={'Search location...'}
                onChange={(input) => updateValue(input.target.value)}
                />
       
        {
          options.length>0 && 
            <div style={{position:'absolute', background:'white',marginTop:'30px'}}>
            <List >
                {options.map(value=> 
                <ListItem>
                    <ListItemButton key={value.key} id={value.Key} name={value.LocalizedName}
                        onClick={e=> setLocation(e)}>
                        {
                        favorites.some(x=>x.key===value.Key) ? 
                            <ListItemIcon>
                                <FavoriteIcon color='red'/>
                            </ListItemIcon> : ''
                        }
                        {value.LocalizedName}
                    </ListItemButton>
                </ListItem>
                )}
            </List>
            </div>
        }
             </form>
        </div>
    );
}