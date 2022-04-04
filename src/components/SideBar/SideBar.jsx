import "./SideBar.css";
import { AiFillDelete, AiFillFile } from "react-icons/ai";
import { BsFillArchiveFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar fixed">
      <div className="icons">
        <Link to="/" className="link">
          <AiFillFile />
        </Link>
        <Link to="/archive" className="link">
        <BsFillArchiveFill />
        </Link>
        <Link to="/trash" className="link">
        <AiFillDelete />
        </Link>
        <Link to="/user" className="link">
        <BiUser />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
