import styled from 'styled-components'
import DayCard from "./DayCard"


export default function CardList(props) {
    return (
      <List>
        {props.data.map((day)=> <DayCard key={day.Date} day={day}></DayCard>)}
      </List>
    )
  }
  

  const List = styled.div`
  background-color:transparent;
  display:grid;
  
  @media only screen and (min-width: 1000px)  {
      grid-template-columns:1fr 1fr 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 600px) and (max-width:1000px)  {
    grid-template-columns:1fr 1fr 1fr ;
}

  @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      width:100vw;
      
  }
`
