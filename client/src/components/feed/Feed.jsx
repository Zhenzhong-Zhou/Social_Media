import {useEffect, useState} from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import {axiosInstance} from "../../api";

const Feed = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const {data} = await axiosInstance.get("api/posts/timeline/612c37ac13c2fb01aad9d943");
			setPosts(data);
		};
		fetchPosts();
	}, []);
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