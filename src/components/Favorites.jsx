import React from 'react'
import { Card } from '@mui/material'
import { useSelector } from 'react-redux'

export default function Favorites() {
  const favorites = useSelector(state=>state.favoritesReducer)

  return (
    <div>
    {
      favorites.length>0 && 
          favorites.map(x=> <Card key={x.id}>{x.name}</Card>)
    }
  </div>
  )
}
