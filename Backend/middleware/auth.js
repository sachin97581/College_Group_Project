import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    let token = req.header('Authorization');
    // console.log("Raw Header:", token);
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    if (token.startsWith('Bearer ')) {
        token = token.slice(7); // Remove "Bearer "
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret_key");
        // console.log("Decoded Token:", decoded);
        req.user = decoded; // Attach entire decoded token (can include more info)
        next();
    } catch (err) {
        console.error("JWT Error:", err.message);
        res.status(400).json({ error: 'Invalid token.' });
    }
};


