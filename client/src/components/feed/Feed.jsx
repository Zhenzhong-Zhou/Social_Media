import {useContext, useEffect, useState} from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import {axiosInstance} from "../../api";
import {AuthContext} from "../../context/AuthContext";

const Feed = ({username}) => {
	const [posts, setPosts] = useState([]);
	const {user} = useContext(AuthContext);
	useEffect(() => {
		const fetchPost = async () => {
			const {data} = username
				? await axiosInstance.get(`posts/profile/${username}`)
				: await axiosInstance.get(`posts/timeline/${user._id}`);
			setPosts(data);
		}
		fetchPost();
	}, [username, user._id]);

	return (
		<div className={"feed"}>
			<div className={"feedWrapper"}>
				<Share/>
				{posts.map((post) => (
					<Post key={post._id} post={post}/>
				))}
			</div>
		</div>
	);
};

export default Feed;