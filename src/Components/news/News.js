import {  useState } from "react";
import "./News.css"
import axios from "axios";
import "./form.scss"

export default function News(){
    let [news , setNews] = useState([])
    let [value,setValue] = useState("")
function valuechanged(e){
let newValue = value
newValue = e.target.value
setValue(newValue)
console.log(newValue);}

    const options ={
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: value, lang: 'en'},
        headers: {
          'X-RapidAPI-Key': '4ec7f6e6ebmsh629d85cb29a40acp1b3192jsn116845b08e2b',
          'X-RapidAPI-Host' : 'free-news.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        news = response.data.articles
    
    setNews(news)
        console.log(news); 
    }).catch(function (error) {
       console.error(error);
    });       
 

return (
<>
<div className="form__group field" autocomplete='off'>
            <input type="input" autocomplete="nada" onKeyDown={(e)=>valuechanged(e)} value={value.name} className="form__field" placeholder="Name" name="name" id='name'  />
            <label for="name" className="form__label">Search</label>
          </div>
        
<div className="theGreat">
{

news?.map((article)=>{

    
console.log(article)

        return (
    <div className="parent">


    <img  key={article.title} className="image" src={article.media} alt="img"/>
    <div className="text">
    <h4 key={article.rank}>{article.published_date}</h4>
    </div>
    </div>
)}
)}
</div>
</>
)}