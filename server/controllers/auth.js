import bcrypt from "bcrypt";
import User from "../models/user.js";

// REGISTER Controller
export const register = async (req, res) => {
	// Generate new password
	try {
		const salt = await bcrypt.genSalt(12);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		// Create new user
		const newUser = await new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword
		});
		// Save user and res
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
};

// LOGIN Controller
export const login = async (req, res) => {
	try {
		// Checkout user.email
		const user = await User.findOne({email: req.body.email});
		!user && res.status(404).json("User not found!");
		// Checkout user.password
		const validPassword = await bcrypt.compare(req.body.password, user.password);
		!validPassword && res.status(400).json("Password is invalid!");
		// No errors
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
};