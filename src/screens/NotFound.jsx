import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <div className="error_page">
      <p className="heading1 center mt-5"> Looks Like You have been Lost:(</p>
      <p className="heading3 center mt-3">
        Sorry we cant find that page, you will find loads to explore on the home
        page
      </p>
      <Link to="/">
        <button className="btn btn-primary mt-4"> Home </button>
      </Link>
    </div>
  );
};

export default NotFound;