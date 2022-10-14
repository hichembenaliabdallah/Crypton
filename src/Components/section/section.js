import  "./section.css"
import { useState } from "react"
import Ticker from "react-ticker"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendDown,faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import PageVisibility from 'react-page-visibility'


export default function Section({Data}){
    
        const [pageIsVisible, setPageIsVisible] = useState(true)
      
        const handleVisibilityChange = (isVisible) => {
          setPageIsVisible(isVisible)
        }
      
    if(Data.every(e=>e.price!==0)){
        return( 
<div>
<PageVisibility onChange={handleVisibilityChange}>
{pageIsVisible && (
        
          <Ticker>  
    {() => (<div className="controler"> {Data?.map(object =>{
  let link = `https://www.gemini.com/images/currencies/icons/default/${object.smbl}.svg`
  let elem = object.color==="rgb(187, 68, 53)" ?<FontAwesomeIcon icon={faArrowTrendDown}/> : <FontAwesomeIcon icon={faArrowTrendUp}/>
return(
    <div key={object.name} className='slider'>
        <div>      <img  className="img1" title={object.namos} src={link}></img>
</div>
      <div>${object.price}</div>
      <div className="duo" style={{color : `${object.color}`}}>{object.change} <span className="spn"> </span> {elem} </div>
    </div>)})}</div>)}
  

        </Ticker>
      )}
  </PageVisibility>
  <img src="./image/Bg.jpg" alt="" srcset="" className="display"/> 
        <div className="showroom">     
        </div>
</div>)}
else{
    return( <div><img src="./image/Bg.jpg" alt="" srcset="" className="display"/> 
        <div className="showroom">     
        </div>
</div>)
   
    }}