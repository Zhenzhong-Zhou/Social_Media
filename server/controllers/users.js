import bcrypt from "bcrypt";
import User from "../models/user.js";

// UPDATE User Controller
export const updateUser = async (req, res) => {
	// Checkout same user or not
	if (req.body.userId === req.params.id || req.body.isAdmin) {
		// Update password
		if (req.body.password) {
			try {
				const salt = await bcrypt.genSalt(12);
				req.body.password = await bcrypt.hash(req.body.password, salt);
			} catch (error) {
				res.status(500).json(error);
			}
		}
		try {
			// Update other user's info
			await User.findByIdAndUpdate(req.params.id, {$set: req.body});
			res.status(200).json("Account has been updated!");
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot update this account!");
	}
};
// DELETE User Controller
export const deleteUser = async (req, res) => {
	// Checkout same user or not
	if (req.body.userId === req.params.id || req.body.isAdmin) {
		try {
			// Delete user
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json("Account has been deleted!");
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot delete this account!");
	}
}
// FIND User Controller
export const findUser = async (req, res) => {
	const userId = req.query.userId;
	const username = req.query.username;
	try {
		// Find specific user's info
		const user = userId ? await User.findById(userId) : await User.findOne({username});
		const {password, updatedAt, ...other} = user._doc;
		res.status(200).json(other);
	} catch (error) {
		res.status(500).json(error);
	}
};
// FOLLOW User Controller
export const followUser = async (req, res) => {
	// Checkout same user or not
	if (req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			// Checkout user has followed current user or not
			if (!user.followers.includes(req.body.userId)) {
				await user.updateOne({$push: {followers: req.body.userId}});
				await currentUser.updateOne({$push: {followings: req.params.id}});
				res.status(200).json("User has been followed!");
			} else {
				res.status(403).json("Cannot follow the same follower again!");
			}
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot follow yourself!");
	}
};
// UNFOLLOW User Controller
export const unfollowUser = async (req, res) => {
	// Checkout same user or not
	if (req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			// Checkout user has unfollowed current user or not
			if (user.followers.includes(req.body.userId)) {
				await user.updateOne({$pull: {followers: req.body.userId}});
				await currentUser.updateOne({$pull: {followings: req.params.id}});
				res.status(200).json("User has been unfollowed!");
			} else {
				res.status(403).json("Cannot follow this user!");
			}
		} catch (error) {
			res.status(500).json(error);
		}
	} else {
		res.status(403).json("Cannot unfollow yourself!");
	}
};