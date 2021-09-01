import {useContext} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home, Login, Profile, Register} from "./pages";
import {AuthContext} from "./context/AuthContext";

const App = () => {
	const {user} = useContext(AuthContext);
	return (
		<BrowserRouter>
			<Switch>
				<Route path={"/"} exact>
					{user ? <Home/> : <Register/>}
				</Route>
				<Route path={"/login"} exact>
					{user ? <Redirect to={"/"}/> : <Login/>}
				</Route>
				<Route path={"/register"} exact>
					{user ? <Redirect to={"/"}/> : <Register/>}
				</Route>
				<Route path={"/profile/:username"} exact>
					<Profile/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;