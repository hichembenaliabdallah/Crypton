import React from "react";
import { Line } from "react-chartjs-2";
import "./Hischart.css"
export default function Hischart({ data }){

const opts = {
   elements: {
     
      point:{
          radius: 0
      }
  },tooltips: {
   enabled: false,
 },
 legend: {
   display: false
 },
      scales: {
        yAxes:[
         {
           display: false, // this will hide vertical lines
         }
       ],xAxes: [
         {
           gridLines: {
             color: '#000',
             borderDash: [1, 3],
           },
           display: false, // this will hide vertical lines
         },
       ],
     },
        }
    
return (<div className="chart-container">
<Line data={data} options={opts} />
</div>)}
    
    
    
   
