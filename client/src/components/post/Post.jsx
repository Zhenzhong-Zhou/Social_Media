import "./post.css";
import {MoreVert} from "@material-ui/icons";

const Post = () => {
	return (
		<div className={"post"}>
			<div className={"postWrapper"}>
				<div className={"postTop"}>
					<div className={"postTopLeft"}>
						<img className={"postProfileImg"} src={"/assets/person/1.jpeg"} alt={"Person"}/>
						<span className={"postUsername"}>Andy</span>
						<span className={"postDate"}>5 minutes ago</span>
					</div>
					<div className={"postTopRight"}>
						<MoreVert/>
					</div>
				</div>
				<div className={"postCenter"}>
					<span className={"postText"}>First Post:) !</span>
					<img className={"postImg"} src={"/assets/post/1.jpeg"} alt={"Post"}/>
				</div>
				<div className={"postBottom"}>
					<div className={"postBottomLeft"}>
						<img className={"likeIcon"} src={"/assets/like.png"} alt={"Like"}/>
						<img className={"likeIcon"} src={"/assets/heart.png"} alt={"Heart"}/>
						<span className={"postLikeCounter"}>32 people like it</span>
					</div>
					<div className={"postBottomRight"}>
						<span className={"postCommentText"}>9 comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;