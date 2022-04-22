import DayCard from "./DayCard"

export default function CardList(props) {

    return (
      <div className="cardList">
        {props.data.map((day)=> <DayCard key={day.Date} day={day}></DayCard>)}
      </div>
    )
  }
  