import React, { useState, useEffect} from "react";
import "./Table.css"
   
export default function Table({Data}) {
  return( 
  <div className="App">
  <div className="const">
  <div>Name</div>
  <div>Price</div>
  <div>Change</div>
  <div>Volume</div>
  </div>
    {
      Data.map(obj=> {
        let link = `https://www.gemini.com/images/currencies/icons/default/${obj.smbl}.svg`
        return  (
           <div key={obj.name} className="infocoin"> 
           
  <div>
  <img className="img" src={link}></img>
  </div>
  <div className="elem">
  <div className="name">
  {obj.name}
  </div>
  <div>${obj.price}</div>
  <div style={{color : `${obj.color}`}}>{obj.change} %</div>
  <div style={{padding : 0}}>XXXXX</div>
  </div>
      </div>)})} 
    </div>)
}










/* useEffect( ()=>{


const formatData = (data,coin) => {
  let coinen = coin.replace("-","")
  let coinen2 = coinen.split("")
  coinen2.push("T")
  let hult =coinen2.join("")
  let hultL = hult.toLowerCase()
  let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${hultL}@ticker`);
      
  ws.onmessage = (e) => {
    let jsonParse =  JSON.parse(e.data);
    let changing = parseFloat(jsonParse.P).toFixed(2); 
    finalData.datasets[0].borderColor = !changing || changing === 0.000 ? "black" : changing > 0.000 ? "rgb(42, 168, 105)" : "rgb(187, 68, 53)"
      }
      
    let finalData = {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          borderWidth : "1.3",
          borderColor: "green",
          fill: false,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgb(236, 105, 98)");
            gradient.addColorStop(1, "rgba(255,255,255");
            return gradient;
          }
        }
      ]
    }
    let dates = data?.map((val) => {
      const ts = val[0];
      let date = new Date(ts * 1000);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let final = `${month}-${day}-${year}`;
      return final;
    });
    let priceArr = data.map((val) => {
      return val[4];
    });
    priceArr.reverse();
    dates.reverse();
    finalData.labels = dates;
    finalData.datasets[0].data = priceArr;
    return finalData;
  };
  
  function chartRet(coin){
    let historicalDataURL = `https://api.pro.coinbase.com/products/${coin}/candles?granularity=86400`;
    const fetchHistoricalData = async () => {
      let dataArr = {};
      await fetch(historicalDataURL)
        .then((res) => res.json())
        .then((data) => (dataArr = data));
      console.log(dataArr);
      let formattedData = formatData(dataArr,coin);
  
    };
  
  fetchHistoricalData();}
  
for(let i =0; i <= len2; i++) chartRet(smb[i])


  
},[]) */






