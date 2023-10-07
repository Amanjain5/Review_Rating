import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
  const navigate = useNavigate();
  let res = localStorage.getItem('user')
  let user = JSON.parse(res)

  const handleLogout = () => {
    console.log("Logout call")
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
        <nav className="container">
      <div className="navbar">
          <ul className="list">
          <li>
              <img id="logo-star" src={require("..//..//assets/Frame 6.png")} alt=""></img>
            </li>

            <li>
              <img id="logo-review" src={require("..//..//assets/Review&Rate (1).png")} alt=""></img>
            </li>
            
            <li id="home">
              <Link to="/">Home</Link>
            </li>
            <li id="company">
              <Link to="/createcompany">Company</Link>
            </li>
          </ul>

          {localStorage.getItem("user") ? (
           <>
             <ul className="list">
               <li id='welcome'> welcome:{user.name}</li>
               <img src={`http://localhost:9000${user.profilepic}`} alt=""/>
               <li>
                <button type='button' id='btn btn-link' onClick={handleLogout}>Logout</button>
               </li>
             </ul>
           </>
          ) : (

            <>
              <ul className="list">
                <li>

                </li>
              </ul>
            </>
          )
        }
      </div>
        </nav>
    </>
  );
};

export default NavBar;
