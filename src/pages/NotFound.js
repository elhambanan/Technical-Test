import { Link } from "react-router-dom";

function NotFound(props) {
    return (
        <>
            <h2>
                404
                <br />
                the page not found
            </h2>
            <br />
            <Link to="/">go to HomePage</Link>
        </>
    )
}
 
export default NotFound;
