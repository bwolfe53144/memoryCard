import { Link } from "react-router-dom";



export default function ErrorPage() {
    return (
        <div className="errorPage">
            <div className="error">404 page not found</div>
            <button className="errorLink">
            <Link to="/">Back To Home</Link>
            </button>
        </div>
    )

}