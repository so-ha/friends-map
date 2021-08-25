import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon1.png";
import "../../css/landing.css";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "80vh" }} className="container jumbotron-1">
        <div className="row mt2">
          <div className="col s12 center-align">
            <h4>
              <b>Pingu</b> says HI!
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Let's look up our friends... <i className="material-icons">mood</i>
            </p>
            <br />
            <div className="penguin">
              <div className="penguin-bottom">
                <div className="right-hand"></div>
                <div className="left-hand"></div>
                <div className="right-feet"></div>
                <div className="left-feet"></div>
              </div>
              <div className="penguin-top">
                <div className="right-cheek"></div>
                <div className="left-cheek"></div>
                <div className="belly"></div>
                <div className="right-eye">
                  <div className="sparkle"></div>
                </div>
                <div className="left-eye">
                  <div className="sparkle"></div>
                </div>
                <div className="blush-right"></div>
                <div className="blush-left"></div>
                <div className="beak-top"></div>
                <div className="beak-bottom"></div>
              </div>
            </div>
            <p className="flow-text grey-text text-darken-3">
              New to Friends-Map? Click Register!
              <br/>
              Already been a user? Hop onto the Login button!
            </p>
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect hoverable grey darken-4"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
