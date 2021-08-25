import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import UserCard from './UserCard';
import '../../../css/usercard.css';
import NavInternal from './NavInternal';

class DisplayCart extends Component {
    constructor(props) {
        super(props);
        this.nonFriends=[1,2,3,4,5,6,7,8,9,10,11,12]
        this.userArr=[];
        if(this.nonFriends.length>0) {
            this.nonFriends.map((i) => (this.userArr.push(<UserCard num={i}/>)))
        }
    }
    render() {
        return (
            <div>
                <NavInternal active="3"/>
                <div className="card-holder container">
                    {this.userArr}
                </div>
            </div>
        );
    }
}


DisplayCart.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    // friends : state.friends,
    // nonFriends : state.nonFriends
  });
  
  export default connect(mapStateToProps, { logoutUser })(DisplayCart);
// export default DisplayCart;