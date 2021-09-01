import {useEffect, useState} from "react";
import {MoreVert} from "@material-ui/icons";
import moment from "moment";
import "./post.css";
import {axiosInstance} from "../../api";
import {Link} from "react-router-dom";

const Post = ({post}) => {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	useEffect(() => {
		const fetchUser = async () => {
			const {data} = await axiosInstance.get(`api/users/${post.userId}`);
			setUser(data);
		};
		fetchUser();
	}, [post.userId]);
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};
	return (
		<div className={"post"}>
			<div className={"postWrapper"}>
				<div className={"postTop"}>
					<div className={"postTopLeft"}>
						<Link to={`profile/${user.username}`}>
							<img className={"postProfileImg"} src={user.profilePicture || assets + "person/noAvatar.png"} alt={"Avatar"}/>
						</Link>
						<span className={"postUsername"}>{user.username}</span>
						<span className={"postDate"}>{moment(post.createdAt).fromNow()}</span>
					</div>
					<div className={"postTopRight"}>
						<MoreVert/>
					</div>
				</div>
				<div className={"postCenter"}>
					<span className={"postText"}>{post?.desc}</span>
					<img className={"postImg"} src={assets + post.image} alt={"Post"}/>
				</div>
				<div className={"postBottom"}>
					<div className={"postBottomLeft"}>
						<img className={"likeIcon"} src={`${assets}like.png`} onClick={likeHandler} alt={"Like"}/>
						<img className={"likeIcon"} src={`${assets}heart.png`} onClick={likeHandler} alt={"Heart"}/>
						<span className={"postLikeCounter"}>{like} people like it</span>
					</div>
					<div className={"postBottomRight"}>
						<span className={"postCommentText"}>{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;