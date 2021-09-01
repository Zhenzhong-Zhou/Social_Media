import {useEffect, useState} from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import {axiosInstance} from "../../api";

const Feed = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPost = async () => {
			const {data} = await axiosInstance.get("posts/timeline/612c3721373f38d180dbbd23");
			setPosts(data);
		}
		fetchPost();
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