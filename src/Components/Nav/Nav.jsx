import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import { RiServerLine } from "react-icons/ri"
import './Nav.css'

const Nav = (props) => {
  
  return (
    <nav>
      <a href="#" onClick={() =>{props.setActiveNav('#')}} className={props.activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{props.setActiveNav('#about')}} className={props.activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{props.setActiveNav('#experience')}} className={props.activeNav === '#experience' ? 'active' : ''} ><BiBook/></a>
      <a href="#portfolio" onClick={()=>{props.setActiveNav('#portfolio')}} className={props.activeNav === '#portfolio' ? 'active' : ''} ><RiServerLine/></a>
      <a href="#contact" onClick={()=>{props.setActiveNav('#contact')}} className={props.activeNav === '#contact' ? 'active' : ''} ><BiMessage/></a>
    </nav>
  )
}

export default Nav
