import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    // Use an environment variable for the secret key
	console.log("hello evryone")
    const token = jwt.sign({ userId }, process.env.JWT_SECRET , {
        expiresIn: "15d", // Token expiry
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // Prevent XSS attacks
        sameSite: "strict", // Protect against CSRF attacks
        secure: process.env.NODE_ENV === "production", // Secure in production
    });
};

export default generateTokenAndSetCookie;
