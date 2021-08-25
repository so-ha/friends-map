import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../actions/authActions";
import DisplayCart from "./DisplayCart";
import NavInternal from "./NavInternal";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user } = this.props.auth;
    return (
      <div className="">
        <NavInternal active="0"/>
        <div className="row">
          <div className="col s12 center-align">
            <img src={"https://robohash.org/"+user.name.split(" ")[0]+"?set=set2"} alt="profile-pic" width="280px" height="300px"/>
            <h5>
              Hey there, <b> {user.name.split(" ")[0]}!</b>
            </h5>
            <form class="col s12 center-align">
                <div class="input-field col s12">
                  <textarea id="textarea1" class="materialize-textarea"></textarea>
                  <label for="textarea1">Enter some post</label>
                <a class="btn btn-large waves-effect waves-light black">Post</a>
                </div>
            </form>
        
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
