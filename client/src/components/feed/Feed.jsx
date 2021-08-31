import {useEffect, useState} from "react";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const url = process.env.REACT_APP_LOCAL_URL;
	useEffect(() => {
		const fetchPosts = async () => {
			const {data} = await axios.get(`${url}/posts/timeline/612c37ac13c2fb01aad9d943`);
			setPosts(data);
		};
		fetchPosts();
	}, []);
	return (
		<div className={"feed"}>
			<div className={"feedWrapper"}>
				<Share/>
				{posts.map((post) => (
					<Post key={post.id} post={post}/>
				))}
			</div>
		</div>
	);
};

export default Feed;