import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import { RiServerLine } from "react-icons/ri"
import './Nav.css'

const Nav = (props) => {
  const checkScroll = () => {
    if (window.scrollY < 775.5556030273438) {
      props.setActiveNav('#')
    } else if (window.scrollY >= 775.5556030273438 && window.scrollY < 1453.33349609375) {
      props.setActiveNav('#about')
    } else if (window.scrollY >= 1453.33349609375&& window.scrollY < 2000.0001220703125) {
      props.setActiveNav('#experience')
    } else if (window.scrollY >= 2000.0001220703125 && window.scrollY < 2666.666748046875) {
      props.setActiveNav('#portfolio')
    } else if (window.scrollY >= 2666.666748046875 && window.scrollY < 3182.963134765625) {
      props.setActiveNav('#contact')
    } else if (window.scrollY >= 3182.963134765625) {
      props.setActiveNav('')
    }
  }
  
  window.addEventListener('scroll', checkScroll)
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