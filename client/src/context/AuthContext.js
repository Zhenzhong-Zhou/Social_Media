import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: {"_id":"612c37ac13c2fb01aad9d943","username":"Jobs","email":"Jobs@gamil.com","profilePicture":"person/3.jpeg","coverPicture":"","followers":[],"followings":[],"isAdmin":false},
	isFetching: false,
	error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
	return (
		<AuthContext.Provider value={{
			user: state.user,
			isFetching: state.isFetching,
			error: state.error,
			dispatch
		}}>
			{children}
		</AuthContext.Provider>
	);
};