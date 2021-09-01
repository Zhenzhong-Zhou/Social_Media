import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from "../constants/actionsTypes";
import {axiosInstance} from "../api";

export const loginCall = async (userCredentials, dispatch) => {
	dispatch({type: LOGIN_START});
	try {
		const {data} = await axiosInstance.post("auth/login", userCredentials);
		dispatch({type: LOGIN_SUCCESS, payload: data});
	} catch (error) {
		dispatch({type: LOGIN_FAILURE, payload: error});
	}
};