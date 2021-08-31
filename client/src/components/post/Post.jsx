import {MoreVert} from "@material-ui/icons";
import "./post.css";
import {Users} from "../../templateData";

const Post = ({post}) => {
	return (
		<div className={"post"}>
			<div className={"postWrapper"}>
				<div className={"postTop"}>
					<div className={"postTopLeft"}>
						<img className={"postProfileImg"} src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt={"Person"}/>
						<span className={"postUsername"}>{Users.filter((user) => user.id === post.userId)[0].username}</span>
						<span className={"postDate"}>{post.date}</span>
					</div>
					<div className={"postTopRight"}>
						<MoreVert/>
					</div>
				</div>
				<div className={"postCenter"}>
					<span className={"postText"}>{post?.desc}</span>
					<img className={"postImg"} src={post.photo} alt={"Post"}/>
				</div>
				<div className={"postBottom"}>
					<div className={"postBottomLeft"}>
						<img className={"likeIcon"} src={"/assets/like.png"} alt={"Like"}/>
						<img className={"likeIcon"} src={"/assets/heart.png"} alt={"Heart"}/>
						<span className={"postLikeCounter"}>{post.like} people like it</span>
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