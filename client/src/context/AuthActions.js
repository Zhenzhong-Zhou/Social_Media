import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from "../constants/actionsTypes";

export const LoginStart = (userCredentials) => ({
	type: LOGIN_START
});

export const LoginSuccess = (user) => ({
	type: LOGIN_SUCCESS,
	payload: user
});

export const LoginFailure = (error) => ({
	type: LOGIN_FAILURE,
	payload: error
});