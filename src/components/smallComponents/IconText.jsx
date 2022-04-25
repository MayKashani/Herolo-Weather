import styled from "styled-components";

export const IconText = (props) => {      
    return (
     <HeaderTextContainer>
        {props.children}
        <HeaderText style={props.style}>
            {props.text}
        </HeaderText>
     </HeaderTextContainer>
    )
   }

export const HeaderTextContainer= styled.div`
display: flex;
flex-direction: row;
padding: 5px;
align-items: center;
text-decoration: none;
color:white;
`

const HeaderText=styled.p`
margin:0 10px;
font-size: 30px;
font-weight: 600;
`