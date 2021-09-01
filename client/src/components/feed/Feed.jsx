import {useEffect, useState} from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import {axiosInstance} from "../../api";
<<<<<<< HEAD

const Feed = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const {data} = await axiosInstance.get("api/posts/timeline/612c37ac13c2fb01aad9d943");
			setPosts(data);
		};
		fetchPosts();
	}, []);
=======

const Feed = ({username}) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPost = async () => {
			const {data} = username
				? await axiosInstance.get("posts/profile/" + username)
				: await axiosInstance.get("posts/timeline/612c3721373f38d180dbbd23");
			setPosts(data);
		}
		fetchPost();
	}, [username]);

>>>>>>> debug1
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