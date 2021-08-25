import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

function NavInternal(props) {
  console.log("props",props)
    return (
        <div>
          <button style={{width: "118px",borderRadius: "3px",letterSpacing: "1.25px",marginTop: "1rem",position: "fixed",top: "3.7rem",right: "0.5rem",zIndex: "999"}}
          onClick={(e)=> {e.preventDefault();props.logoutUser()}} className="btn btn waves-effect waves-light hoverable grey darken-4">
          Logout
        </button>
            <nav className="nav-extended blue header-text">
              <div className="nav-content">
                <ul className="tabs tabs-transparent">
                <li className="tab">
                    <Link to="/dashboard" className={props.active=="0"?"active" :""}>
                      <b>Dashboard</b>
                    </Link>
                  </li>
                  <li className="tab">
                    <Link to="/friends" className={props.active=="1"?"active" :""}>
                      <b>My Friends</b>
                    </Link>
                  </li>
                  <li className="tab">
                    <Link to="/map" className={props.active=="2"?"active" :""}>
                      <b>My Map of Friends</b>
                    </Link>
                  </li>
                  <li className="tab">
                    <Link to="/addfriends" className={props.active=="3"?"active" :""}>
                      <b>Add Friends</b>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav> 
        </div>
    );
}

NavInternal.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavInternal);