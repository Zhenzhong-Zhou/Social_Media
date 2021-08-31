import "./righbar.css";

const RightBar = () => {
	return (
		<div className={"rightBar"}>
			<div className={"rightBarWrapper"}>
				<div className={"birthdayContainer"}>
					<img className={"birthdayImg"} src={"/assets/gift.png"} alt={"Birthday"}/>
					<span className={"birthdayText"}>
						<b>Paul Foster</b> and <b>3 other friends</b> have a birthday today.
					</span>
				</div>
				<img className={"rightBarAd"} src={"/assets/ad.png"} alt={"Ad"}/>
				<h4 className={"rightBarTitle"}>Online Friends</h4>
				<ul className={"rightBarFriendList"}>
					<li className={"rightBarFriend"}>
						<div className={"rightBarProfileImgContainer"}>
							<img className={"rightBarProfileImg"} src={"/assets/person/3.jpeg"} alt={"Profile"}/>
							<span className={"rightBarOnline"}></span>
						</div>
						<span className={"rightBarUsername"}>John Cart</span>
					</li>
					// Removed below items later <br/><br/><br/><br/><br/><br/>
					<li className={"rightBarFriend"}>
						<div className={"rightBarProfileImgContainer"}>
							<img className={"rightBarProfileImg"} src={"/assets/person/3.jpeg"} alt={"Profile"}/>
							<span className={"rightBarOnline"}></span>
						</div>
						<span className={"rightBarUsername"}>John Cart</span>
					</li><li className={"rightBarFriend"}>
					<div className={"rightBarProfileImgContainer"}>
						<img className={"rightBarProfileImg"} src={"/assets/person/3.jpeg"} alt={"Profile"}/>
						<span className={"rightBarOnline"}></span>
					</div>
					<span className={"rightBarUsername"}>John Cart</span>
				</li><li className={"rightBarFriend"}>
					<div className={"rightBarProfileImgContainer"}>
						<img className={"rightBarProfileImg"} src={"/assets/person/3.jpeg"} alt={"Profile"}/>
						<span className={"rightBarOnline"}></span>
					</div>
					<span className={"rightBarUsername"}>John Cart</span>
				</li><li className={"rightBarFriend"}>
					<div className={"rightBarProfileImgContainer"}>
						<img className={"rightBarProfileImg"} src={"/assets/person/3.jpeg"} alt={"Profile"}/>
						<span className={"rightBarOnline"}></span>
					</div>
					<span className={"rightBarUsername"}>John Cart</span>
				</li><li className={"rightBarFriend"}>
					<div className={"rightBarProfileImgContainer"}>
						<img className={"rightBarProfileImg"} src={"/assets/person/3.jpeg"} alt={"Profile"}/>
						<span className={"rightBarOnline"}></span>
					</div>
					<span className={"rightBarUsername"}>John Cart</span>
				</li>
				</ul>
			</div>
		</div>
	);
};

export default RightBar;