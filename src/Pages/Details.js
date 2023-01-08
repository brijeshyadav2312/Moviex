import * as React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { omdb } from "../utils";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useLocalStorage from "use-local-storage";


const Details = () =>{
    const{id} = useParams();
    const navigate = useNavigate();
    const [data,setData] = useState({})
    const [fav, setFav] = useLocalStorage("favorit", "[]");
    const [isFav,setIsFav] = useState(false)
    const [bookmark, setBookmark] = useLocalStorage("bookmark", "[]");
    const [ismark,setMark] = useState(false)

    useEffect( _ =>{
        (async _ =>{
            const response = await omdb.get(`?i=${id}&plot=full`)
            if(response.data.Response!=='False'){
                setData(response.data);
            }
            else{
                navigate('/404');
            }
        })();
    },[id])

    //Favorit
    useEffect(_ =>{
        const favs = JSON.parse(fav);
        if(favs.includes(id)){
            setIsFav(true)
        }else{
            setIsFav(false)
        }
   },[fav,id])

   const toggleFavorit = _ =>{
    const favs = JSON.parse(fav);
    if(isFav){
        const idx = favs.indexOf(id);
        favs.splice(idx,1)
        setIsFav(false);
    }else{
        favs.unshift(id)
        setIsFav(true)
    }
    setFav(JSON.stringify(favs))
   }

   //bookmark
   useEffect(_ =>{
    const mark = JSON.parse(bookmark);
    if(mark.includes(id)){
        setMark(true)
    }else{
        setMark(false)
    }
    },[bookmark,id])

    const toggleBookmark = _ =>{
    const mark = JSON.parse(bookmark);
    if(ismark){
        const idx = mark.indexOf(id);
        mark.splice(idx,1)
        setMark(false);
    }else{
        mark.unshift(id)
        setMark(true)
    }
    setBookmark(JSON.stringify(mark))
    }


    const toNum = (percentage) =>{
        let num = percentage*10;
        return num;
    }

    return(
    <div className='main'>
        <div className='backgrounHead'>
            <div className='backgroundImage' style={{backgroundImage: `url(${data.Poster})`}}></div>
            <div className='movieCard'>
                <img src={data.Poster} alt='poster'/>
                <div className='movieDetails'>
                    <p>
                      <p>{data.Title}</p>
                      <p>{data.Released} • {data.Genre} • {data.Runtime}</p>
                    </p>
                    <div className='Actors'>
                        {data.Actors!==undefined?(
                            data.Actors.split(", ").map((person, idx) => {
                                return(
                                    <div key={idx}>
                                        <span className='actersName'>{person}</span>
                                    </div>
                                )
                            })):("")
                        }
                    </div>
                    <div className='score'>
                        <div className='progressBar' style={{width:'70px',fontWeight:'bold',fontFamily: 'Consensus'}}>
                            <CircularProgressbar value={data.imdbRating!==undefined?toNum(data.imdbRating):'0'} text={`${data.imdbRating!==undefined?toNum(data.imdbRating):'0'}%`} styles={buildStyles({textColor: "white", textSize:"1.7rem" ,pathColor: "#D3D431",trailColor: "#433C0F"})}/>
                        </div>
                        <p>User<p>Score</p></p>&nbsp;&nbsp;
                        <span onClick={toggleFavorit}>{isFav?<Icon.HeartFill color='#c70404' className='heart'/>:<Icon.HeartFill className='heart'/>}</span>
                        <span onClick={toggleBookmark}>{ismark?<Icon.BookmarkFill color='#04adc7'/>:<Icon.BookmarkFill/>}</span>
                    </div>
                    <div className='Author'>
                        <p>
                            <p>{data.Director}</p>
                            <p>Director</p>
                        </p>
                        <p>
                            <p>{data.Writer}</p>
                            <p>Writer</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='moreDetails'>
            <span className='overview'><p>Overview: </p><p>{data.Plot}</p></span>
            <div>
                <p>BoxOffice: <span>{data.BoxOffice}</span></p>
                <p>Director: <span>{data.Director}</span></p>
                <p>Country: <span>{data.Country}</span></p>
                <p>Language: <span>{data.Language}</span></p>
                <p>Released: <span>{data.Released}</span></p>
                <p>Awards: <span>{data.Awards}</span></p>
                <p>Genre: <span>{data.Genre}</span></p>
                <p>Runtime: <span>{data.Runtime}</span></p>
            </div>
        </div>
    </div>
    )
}
export default Details;