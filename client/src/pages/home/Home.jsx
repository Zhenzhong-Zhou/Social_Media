import {Feed, LeftBar, RightBar, TopBar} from "../../components";
import "./home.css";

const Home = () => {
	return (
		<>
			<TopBar/>
			<div className={"homeContainer"}>
				<LeftBar/>
				<Feed/>
				<RightBar/>
			</div>
		</>
	);
};

export default Home;