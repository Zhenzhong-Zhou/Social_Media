import {FOLLOW, UNFOLLOW} from "../constants/actionsTypes";

export const Follow = (userId) => ({
	type: FOLLOW, payload: userId
});

export const Unfollow = (userId) => ({
	type: UNFOLLOW, payload: userId
});