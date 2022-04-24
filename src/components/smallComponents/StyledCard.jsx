import { CardContent, CardHeader, CardMedia } from '@mui/material'
import styled from "styled-components";

export const MyCard = (props) => {
    return (
      <StyledCard onClick = { () => props.handleClick? props.handleClick(props.data) : null}>
      <StyledCardHeader title={props.title}/>
      {props.media && <StyledCardMedia 
      sx={{width:'100%'}}
      component="img"
      image={props.media}
      />}
      <StyledCardContent className='cardContent'>
        {props.children}
      </StyledCardContent>
    </StyledCard>
    )
  }


const StyledCard = styled.div`
text-align: center;
margin: 10px 5px;
box-shadow: rgb(47 48 48 / 50%) 0px -1px 20px 3px;
border-radius: 10px;
background-color: rgba(255, 255, 255, 0.2);
padding: 5px;
color: white;


@media only screen and (max-width: 600px) {
    display:grid;
    flex: 0 1 100%
    grid-template-columns: 1fr 2fr;

}
`

const StyledCardHeader = styled(CardHeader)`
text-transform:uppercase;

@media only screen and (max-width: 600px) {
    grid-column:2/4;
    text-align: left;
  }

`

const StyledCardMedia = styled(CardMedia)`
  @media only screen and (min-width: 600px)  {
      width:100%
    }

    @media only screen and (max-width: 600px) {
        grid-column:1/2;
        grid-row:1/2;
        width:100%
      }
`

const StyledCardContent = styled(CardContent) `
  font-size:28px;

@media only screen and (max-width: 600px) {
  grid-column:1/3;
  grid-row:2/3;
  font-size:24px;
}
`