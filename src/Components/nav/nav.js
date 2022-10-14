import  "./nav.css"
import { Link } from "react-router-dom"
export default function Nav(){


    
    return(
<div className="navbar">
   <h1 className="logo">Crypton</h1>

        <ul className="navlinks">  
              <li className="navlink">CHARTS</li>
              <li className="navlink">RANK</li>
              <li className="navlink">STATS</li>
            

<li className="navlink " href="#" >NEWS</li>   

        </ul>
        <div className="user-log" >
            <button className="button1">Log in</button>
            <button className="button2">Sign up</button>
                
                
              </div>
    </div>
    )
}