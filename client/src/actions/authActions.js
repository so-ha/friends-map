import axios from 'axios';
// import { decode } from 'jsonwebtoken';
import jwt_decode from "jwt-decode";
import setAuthToken from '../utils/setAuthToken';

import {GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from './types';

//register user
export const registerUser = (userData, history) => dispatch => {
    axios.post("/api/users/register", userData)
    .then(res => history.push("/login")) //redirect to login on successful register
    .catch(err=> dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    }))
}

//login - get user token
export const loginUser = userData => dispatch => {
    axios.post("/api/users/login",userData)
    .then (res => {
        //save to localStorage
        //set token to localStorage
        const {token} = res.data;
        localStorage.setItem("jwtToken", token);
        //set token to Auth Header
        setAuthToken(token);
        //decode token to get user data
        const decoded = jwt_decode(token);
        //set current user
        dispatch(setCurrentUser(decoded))
    })
    .catch(err => dispatch({
        type : GET_ERRORS, 
        payload:err.response.data
    }))
}

//set logged in user 
export const setCurrentUser = decoded => {
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
}

//user loading
export const setUserLoading = () => {
    return {
        type:USER_LOADING
    }
}

//log user out
export const logoutUser = () => dispatch => {
    //remove token from localStorage
    localStorage.removeItem("jwtToken");
    //remove  auth header for future requests
    setAuthToken(false);
    //set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}))
}

