import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import FavoritMovies from '../components/Favoritovies.js';
import Bookmark from "../components/Bookmark.js";

const Home = () => {

  const [fav] = useLocalStorage("favorit", "[]");
  const [bookmark] = useLocalStorage("bookmark", "[]");

  const topMovies = [
    {
      Poster:
        "https://images.thequint.com/thequint%2F2022-06%2F50753a57-1fcd-42e2-bd82-617932e8fb53%2FVikram_First_Look_Poster_2.jpg?auto=format%2Ccompress&fmt=webp&width=720",
      Title: "Vikram",
      Released: "03 Jun 2022",
      imdbID:'tt9179430'
    },
    {
      Poster:
        "https://www.financialexpress.com/wp-content/uploads/2022/04/kgf-2-1200.jpeg",
      Title: "K.G.F: Chapter 2",
      Released: "14 April 2022",
      imdbID:'tt10698680'
    },
    {
      Poster:
        "https://survi.in/wp-content/uploads/2022/09/20220929_184015-1024x576.jpg",
      Title: "Ponniyin Selvan: I",
      Released: "30 September 2022",
      imdbID:'tt10701074'
    },
    {
      Poster: "https://pbs.twimg.com/media/FFwqvLTVIAIcDDC.jpg",
      Title: "RRR",
      Released: "24 March 2022",
      imdbID:'tt8178634'
    },
    {
      Poster:
        "https://www.mixindia.com/wp-content/uploads/2022/03/BeFunky-collage-1-7.jpg",
      Title: "A Thursday",
      Released: "17 February 2022",
      imdbID:'tt13028258'
    },
    {
      Poster:
        "https://images.hindustantimes.com/tech/img/2022/05/09/1600x900/1500x500_1652090905761_1652090927253.jfif",
      Title: "Brahmāstra: Part One – Shiva",
      Released: "9 September 2022",
      imdbID:'tt6277462'
    },
  ];



  const scollL = () =>{
    var slider = document.getElementById('slideContent');
    slider.scrollLeft = slider.scrollLeft-610;
  }
  const scollR = () =>{
    var slider = document.getElementById('slideContent');
    slider.scrollLeft = slider.scrollLeft+610;
  }
///////
  const scollLF = () =>{
    var slider = document.getElementById('favorite');
    slider.scrollLeft = slider.scrollLeft-610;
  }
  const scollRF = () =>{
    var slider = document.getElementById('favorite');
    slider.scrollLeft = slider.scrollLeft+610;
  }
///////
  const scollLB = () =>{
    var slider = document.getElementById('bookmarks');
    slider.scrollLeft = slider.scrollLeft-610;
  }
  const scollRB = () =>{
    var slider = document.getElementById('bookmarks');
    slider.scrollLeft = slider.scrollLeft+610;
  }

  return (
    <div className="tophead">
      <p className="sliderAndTopHead"><p><Icon.ArrowUpRightCircleFill/> Top Movies 2022</p><p className="scerollbtn"><Icon.ArrowLeftSquareFill cursor={'pointer'} onClick={scollL} color="#011c31" size={30}/> <Icon.ArrowRightSquareFill size={30} cursor={'pointer'} onClick={scollR} color="#011c31"/></p></p>
      <div id="slideContent" className="homeMain" >
        {topMovies.map((ele, idx) => {
          return (
            <div key={idx} className="topMovies">
              <div className="poster" >
                <img src={ele.Poster} alt=""/>
              </div>
              <div className="text">
                <span className="posterTitle"><p>{ele.Title}</p><span>{ele.Released}</span></span>
                <span><Link to={`/details/${ele.imdbID}`}>Know More</Link></span>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="favoriteHeader"><p className="sliderAndTopHead"><p><Icon.HeartFill  color="#c70404"/> Favorite Movies</p><p className="scerollbtn"><Icon.ArrowLeftSquareFill size={30} cursor={'pointer'} onClick={scollLF} color="#011c31"/> <Icon.ArrowRightSquareFill size={30} cursor={'pointer'} onClick={scollRF} color="#011c31"/></p></p></div>
        <div  id="favorite" className="favoritMovies">
          <br/>
          {
            JSON.parse(fav).map((e, idx) => {
              return(
                <FavoritMovies id={e} key={idx}/>
              )
            })
          }
        </div>
      </div>
      <div>
      <div className="favoriteHeader"><p className="sliderAndTopHead"><p><Icon.BookmarkFill color="#04adc7"/> Watch Later</p><p className="scerollbtn"><Icon.ArrowLeftSquareFill size={30} cursor={'pointer'} onClick={scollLB} color="#011c31"/> <Icon.ArrowRightSquareFill size={30} cursor={'pointer'} onClick={scollRB} color="#011c31"/></p></p></div>
      <div id="bookmarks" className="favoritMovies">
        <br/>
        {
          JSON.parse(bookmark).map((e, idx) => {
            return(
              <Bookmark id={e} key={idx}/>
            )
          })
        }
      </div>
      </div>
    </div>
  );
};
export default Home;
