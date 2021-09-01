import express from "express";
import {
	createPosts,
	updatePost,
	deletePost,
	likePost,
	findPost,
	timelinePost,
	profilePost
} from "../controllers/posts.js";

const router = express.Router();

// Create post route
router.post("/", createPosts);
// Update post route
router.put("/:id", updatePost);
// Delete post route
router.delete("/:id", deletePost);
// Like post route
router.put("/:id/like", likePost);
// Find post route
router.get("/:id", findPost);
// Find timeline posts route
router.get("/timeline/:userId", timelinePost);
// Find user's profile posts route
router.get("/profile/:username", profilePost);


export default router;