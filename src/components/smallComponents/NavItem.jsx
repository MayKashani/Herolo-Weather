import { NavLink } from "react-router-dom"
import { IconText } from "./IconText"

//Navigation
export const NavItem = (props) => {
    return (
      <NavLink className='hoverAnimation' to={props.to} activeClassName='active' >
        <IconText text={props.text}>
          {props.children}
        </IconText>  
      </NavLink>
    )
  }
