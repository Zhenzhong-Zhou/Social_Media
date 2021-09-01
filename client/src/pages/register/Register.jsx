import {useRef} from "react";
import {useHistory} from "react-router-dom";
import "./register.css";
import {axiosInstance} from "../../api";

const Register = () => {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const confirmedPassword = useRef();
	const history = useHistory();
	const handleClick = async (event) => {
		event.preventDefault();
		if (confirmedPassword.current.value !== password.current.value) {
			confirmedPassword.current.setCustomValidity("Password dose not match!");
		} else {
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value
			};
			try {
				await axiosInstance.post("auth/register", user);
				history.push("/login");
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className={"login"}>
			<div className={"loginWrapper"}>
				<div className={"loginLeft"}>
					<h3 className={"loginLogo"}>Facebook</h3>
					<span className={"loginDesc"}>
						Connect with friends and the world around you on Facebook.
					</span>
				</div>
				<div className={"loginRight"}>
					<form className={"loginBox"} onSubmit={handleClick}>
						<input placeholder={"Username"} required ref={username} className={"loginInput"}/>
						<input placeholder={"Email"} required ref={email} className={"loginInput"} type={"email"}/>
						<input placeholder={"Password"} required ref={password} className={"loginInput"} type={"password"} minLength={6}/>
						<input placeholder={"Confirmed Password"} required ref={confirmedPassword} className={"loginInput"} type={"password"} minLength={6}/>
						<button className={"loginButton"} type={"submit"}>Sign Up</button>
						<button className={"loginRegisterButton"}>Login your Account</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;