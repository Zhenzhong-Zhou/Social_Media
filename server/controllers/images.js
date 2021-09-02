export const images = (req, res) => {
	try {
		res.status(200).json("File uploaded successfully!");
	} catch (error) {
		console.log(error);
	}
};