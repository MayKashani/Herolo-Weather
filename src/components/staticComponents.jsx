

export const IconText = (props) => {      
 return (
  <div className='iconText'>
   {props.children}
   <p style={props.style}>{props.text}</p>
  </div>
 )
}


