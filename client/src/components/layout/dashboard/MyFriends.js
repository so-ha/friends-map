import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import NavInternal from './NavInternal';

class MyFriends extends Component {
    render() {
        return (
          <div>
            <NavInternal active="1"/>
          </div>
        );
    }
}

MyFriends.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(MyFriends);