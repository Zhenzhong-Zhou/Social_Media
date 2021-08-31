import {Home, Login, Profile, Register} from "./pages";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={"/"} exact>
					<Home/>
				</Route>
				<Route path={"/login"} exact>
					<Login/>
				</Route>
				<Route path={"/register"} exact>
					<Register/>
				</Route>
				<Route path={"/profile/:username"} exact>
					<Profile/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;