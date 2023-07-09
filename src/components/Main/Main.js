import React, { useEffect, useState } from 'react'
import {getMovies} from '../../movieData'
import './Main.css'
import { ImageCard } from '../../card';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Main = () => {
    // console.log(typeof(Data))
    const data = getMovies();
    const dharun = true;
    const [color,setColor] = useState("green");

    const changeColor  = ()=>{
      setColor("red")
    }

   useEffect(()=>{
    console.log("mounted")
    return ()=> {
      console.log("unmounted")
   };
},[]);
  return (
    <>
    <button onClick={changeColor}>click me</button>
    {dharun ? <Header/> : null}
    <div className='batman'><h1>BATMAN</h1></div>
    <div className='maincontent'>
        
        {
            data.map((e,i,arr)=>{
                return(
                  <div className='maincontent'  style={{backgroundColor : `${color}`}}>
                    <Link style={{ textDecoration: 'none',}} to={`/main/movie/${i}`}>
                         <ImageCard  key={i} title={e.Title} imdb={e.imdbID} poster={e.Poster}></ImageCard>
                   </Link>
                  </div>
                )
            })
        }
    </div>
    <Footer/>
    </>
  )
}

export default Main