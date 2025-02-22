import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://gabbarbhaiya:Shubham123@gabbarbhaiya.2lvenhx.mongodb.net/Chatbox");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
