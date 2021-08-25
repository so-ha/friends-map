import axios from 'axios';
import { GET_FRIENDS, GET_NON_FRIENDS, SET_FRIEND, SET_NON_FRIEND, GET_ERRORSF} from './types';

//find friends of the user by hitting the database records
export const findFriends = (userData) => dispatch => {
    axios.post("/friends", userData)
    .then(result=> {
        console.log("Hi");
        if(!result) {
            console.log("error in getting the response")
            dispatch({
                type:GET_ERRORS,
                errorsF:result.response.data
            })
        }
        else {
            dispatch({
                type:GET_FRIENDS,
                friends:result.response.friends
            })
        }
    })
    .catch(err=> dispatch({
        type:GET_ERRORSF,
        errorsF:err.response.data
    }))
}

//find all the users other than friends of the user by hitting the database records
export const findNonFriends = userData => dispatch => {
    axios.post("/addfriends",userData)
    .then (result => {
        console.log("Hi");
        if(!result) {
            console.log("error in getting the response")
            dispatch({
                type:GET_ERRORS,
                errorsF:result.response.data
            })
        }
        else {
            dispatch({
                type:GET_NON_FRIENDS,
                nonFriends:result.response.nonfriends
            })
        }
    })
    .catch(err => dispatch({
        type : GET_ERRORSF, 
        errorsF:err.response.data
    }))
}
