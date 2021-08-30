import Post from "../models/post.js";
import User from "../models/user.js";

// CREATE Post Controller
export const createPosts = async (req, res) => {
	const createPost = new Post(req.body);
	try {
		const newPost = await createPost.save();
		res.status(200).json(newPost);
	} catch (error) {
		res.status(500).json(error);
	}
};
// Update Post Controller
export const updatePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			await post.updateOne({$set: req.body});
			res.status(200).json("Post has been updated!");
		} else {
			res.status(403).json("Cannot update this post!");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
// DELETE Post Controller
export const deletePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			await post.deleteOne();
			res.status(200).json("Post has been deleted!");
		} else {
			res.status(403).json("Cannot delete this post!");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
// LIKE/DISLIKE Post Controller
export const likePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post.likes.includes(req.body.userId)) {
			await post.updateOne({$push: {likes: req.body.userId}});
			res.status(200).json("Post has been liked!");
		} else {
			await post.updateOne({$pull: {likes: req.body.userId}});
			res.status(200).json("Post has been disliked!");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
// FIND Post Controller
export const findPost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};
// TIMELINE Posts Controller
export const timelinePost = async (req, res) => {
	try {
		const currentUser = await User.findById(req.body.userId);
		const userPosts = await Post.find({userId: currentUser._id});
		const friendPosts = await Promise.all(
			currentUser.followings.map((friendId) => {
				return Post.find({userId: friendId});
			})
		);
		res.json(userPosts.concat(...friendPosts));
	} catch (error) {
		res.status(500).json(error);
	}
};