import "./sidebar.scss"
import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton"
import { motion } from "framer-motion"

const Sidebar = () => {
  const [open,setOpen] =useState(false)
  const variants ={
    open:
    closed:
  }
  return (
    <motion.div className="sidebar" animate={open ? "open" :"closed"}>
      <div className="bg">
        Links
      </div>
      <ToggleButton setOpen={setOpen}/>

    </motion.div>
  )
}

export default Sidebar