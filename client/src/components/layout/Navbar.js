import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/icon1.png'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white header-text">
            <Link to="/" style={{fontFamily: "monospace"}}
              className="col s12 brand-logo center ms5 black-text">
                 <img src={logo} alt="friends-map logo" width="25px" height="25px" id="icon1"/>
              &nbsp;FRIENDS-MAP
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
