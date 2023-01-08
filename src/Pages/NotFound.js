import { Link } from "react-router-dom";

const NotFound = () =>{
    return(
        <div className="pageNotFound">
            <p>404</p>
            <h3>We can't seem to find a page you're looking for.<br/><Link to={'/'} className='Goto'>Home</Link></h3>
        </div>
    )
}
export default NotFound;