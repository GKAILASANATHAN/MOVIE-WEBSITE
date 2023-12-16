import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

const Navbar = ({ size }) => {
  const googleToken = localStorage.getItem("googleToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("googleToken");
    navigate("/");
  };
  return (
    <>
      {googleToken ? (
        <nav>
          <p className="navmovie">
            <strong>MOVIE TICKET SITE</strong>
          </p>
          <ul>
            <Link to="Home">
              <li>HOME</li>
            </Link>
            <Link to="/Movies">
              <li>MOVIES</li>
            </Link>
            <Link to="/Contact">
              <li>CONTACT</li>
            </Link>
            <Link to="/Carddetail">
              <i>
                <span style={{ color: "white" }}>{size}</span>
                <BsFillCartCheckFill size="1.5rem" color="white" />
              </i>
            </Link>
            <Link to="/" style={{ paddingLeft: "30px" }} onClick={handleLogout}>
              <i>
                <IoIosLogOut size="1.5rem" color="white" />
              </i>
            </Link>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
