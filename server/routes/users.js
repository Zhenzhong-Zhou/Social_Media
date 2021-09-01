import express from "express";
import {updateUser, deleteUser, findUser, followUser, unfollowUser} from "../controllers/users.js";

const router = express.Router();
// Update user route
router.put("/:id", updateUser);
// Delete user route
router.delete("/:id", deleteUser);
// Find user route
router.get("/", findUser);
// Follow user route
router.put("/:id/follow", followUser);
// Unfollow user route
router.put("/:id/unfollow", unfollowUser);

export default router;