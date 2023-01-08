import React,{useEffect, useState} from 'react'
import { omdb } from '../utils';
import ImageNotFound from './ImageNotFound.jpg'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Bookmark = (props) => {
  const [data,setData] = useState({});
    useEffect(_ =>{
        (async _ =>{
            const response = await omdb.get(`?i=${props.id}`)
            console.log(response.data);
            setData(response.data)
        })();
    },[props.id])
  return (
    <div>
      <div className="favCards">
      <Link to={`/details/${props.id}`} className='cardImages'><p style={{backgroundImage: `url(${data.Poster!=='N/A'?(data.Poster):(ImageNotFound)})`}}></p></Link>
            <span className="ratingFav">
                <Icon.StarFill/>
                <span>{data.imdbRating}/10</span><span>•</span>
                <span style={{color:'rgb(146, 145, 145)'}}>{data.Year}</span>
            </span>
            <span><Link to={`/details/${props.id}`} className='cardImages'><span>{data.Title}</span></Link><span style={{color:'rgb(146, 145, 145)'}}>({data.Type})</span></span>
        </div>
    </div>
  )
}

export default Bookmark
