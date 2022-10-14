
import Nav from "./nav/nav"
import Table from "./table/table"
import dataAlt from "./table/data"
import Section from "./section/section";
import React, { useEffect, useState } from "react";
import News from "./news/News"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css"


let names = dataAlt.map(e=>  e.name.toLowerCase())
const nevo =[]
names.forEach(obj=>{  nevo.push(obj+"@ticker")})
const alba = nevo.join("/")
console.log(alba);



export default function App(){ 
    const [Data, setData] = useState(dataAlt);
useEffect(()=>{
  let Auto =  ()=>{
    let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${alba}`);
      ws.onmessage =  (e) => {
    let jsonParse =  JSON.parse(e.data);
    console.log(jsonParse);
        const pricing = parseFloat(jsonParse.c).toFixed(2);
        const changing = parseFloat(jsonParse.P).toFixed(2);
        const colored = !changing || changing === 0.000 ? "black" : changing > 0.000 ? "rgb(42, 168, 105)" : "rgb(187, 68, 53)"
        setData(current => current.map(obj => {
                 if (obj.name === jsonParse.s )  return {...obj, price: pricing, change: changing,color: colored}
                 return obj;
    }),
    ); 
};
}
 Auto() ;

},[])

  return( <div>
<BrowserRouter>
    <Nav/>
    <Routes>
    <Route    path="/" element={<Section Data={Data}/>} />
    <Route    path="/news" element={<News/>} />
    <Route path="/stats" element={<Table Data ={Data} />}/>
    </Routes>
</BrowserRouter>
          </div>)}
          