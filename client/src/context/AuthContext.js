import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: {
		_id: "612c37ac13c2fb01aad9d943",
		username:"Jobs",
		email:"Jobs@gamil.com",
		profilePicture:"person/3.jpeg",
		coverPicture:"",
		followers:[],
		followings:["612c315aadda93acc6bfb559", "612c3721373f38d180dbbd23"],
		isAdmin:false,
		// _id:{"$oid":"612c315aadda93acc6bfb559"},
		// username:"Jacob",
		// email:"jacob@gamil.com",
		// password:"$2b$12$NICP8IFm8DOnuS7xnsDb.e5nPOkzcNjBG9FU9JFjuDdd/WU7noroO",
		// profilePicture:"",
		// coverPicture:"",
		// followers:["612c37ac13c2fb01aad9d943", "612c3721373f38d180dbbd23"],
		// followings:["612c3500c055fd89e189ba5d"],
		// isAdmin:false,
		// createdAt:{"$date":{"$numberLong":"1630286170146"}},
		// updatedAt:{"$date":{"$numberLong":"1630288452566"}},
		// __v:{"$numberInt":"0"}
	},
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