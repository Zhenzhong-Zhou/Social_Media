import {useContext, useRef, useState} from "react";
import {EmojiEmotions, Label, PermMedia, Room} from "@material-ui/icons";
import "./share.css";
import {AuthContext} from "../../context/AuthContext";
import {axiosInstance} from "../../api";

const Share = () => {
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	const {user} = useContext(AuthContext);
	const description = useRef();
	const [file, setFile] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newPost = {
			userId: user._id,
			description: description.current.value
		};

		try {
			await axiosInstance.post("posts", newPost);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={"share"}>
			<div className={"shareWrapper"}>
				<div className={"shareTop"}>
					<img className={"shareProfileImg"} src={user.profilePicture ? assets + user.profilePicture : assets + "person/noAvatar.png"} alt={"Avatar"}/>
					<input placeholder={`What's in your mind ${user.username}?`} className={"shareInput"} ref={description}/>
				</div>
				<hr className={"shareHr"}/>
				<form className={"shareBottom"} onSubmit={handleSubmit}>
					<div className={"shareOptions"}>
						<label htmlFor={"file"} className={"shareOption"}>
							<PermMedia htmlColor={"tomato"} className={"shareIcon"}/>
							<span className={"shareOptionText"}>Photo or Video</span>
							<input style={{display: "none"}} type={"file"} id={"file"} accept={".jpg,.png,.gif,.webp,.tiff,.raw,.jepg200"} onChange={event => setFile(event.target.files[0])}/>
						</label>
						<div className={"shareOption"}>
							<Label htmlColor={"blue"} className={"shareIcon"}/>
							<span className={"shareOptionText"}>Tags</span>
						</div>
						<div className={"shareOption"}>
							<Room htmlColor={"green"} className={"shareIcon"}/>
							<span className={"shareOptionText"}>Location</span>
						</div>
						<div className={"shareOption"}>
							<EmojiEmotions htmlColor={"goldenrod"} className={"shareIcon"}/>
							<span className={"shareOptionText"}>Feelings</span>
						</div>
					</div>
					<button className={"shareButton"} type={"submit"}>Share</button>
				</form>
			</div>
		</div>
	);
};

export default Share;