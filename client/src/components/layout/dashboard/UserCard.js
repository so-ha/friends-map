import React from 'react';
import '../../../css/usercard.css';

function UserCard(props) {
    return (
        <div className="card-layout center">
            {/* <i className="large material-icons grey lighten-3 user-default">person_outline</i> */}
            <img src={"https://robohash.org/"+props.num+"?set=set2"} alt="profile-pic" width="80px" height="90px"/>
            <p>Name</p>
            <button className="btn btn-small waves-effect waves-light hoverable grey darken-4" style={{borderRadius:"4px"}}>
                <i className="material-icons left">person_add</i>
                Add friend
              </button>
        </div>
    );
}

export default UserCard;