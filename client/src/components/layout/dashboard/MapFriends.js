import React, { Component } from 'react';
import NavInternal from './NavInternal';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import map_demo from '../../../assets/map_demo.jpg'


class MapFriends extends Component {
    render() {
        return (
            <div>
               <NavInternal active="2"/>
               <div className="container" style={{marginTop:"2rem"}}>
                    <img src={map_demo} alt="map demo" width="1000px" height="600px"/>
               </div>
            </div>
        );
    }
}

MapFriends.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { logoutUser })(MapFriends);