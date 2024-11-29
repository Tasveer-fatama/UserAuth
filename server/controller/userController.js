import User from '../model/usermodel.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length > 0) {
            return res.status(200).json({ users });
        } else {
            return res.status(404).json({ message: "No users found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const AddUsers = async (req, res) => {
    const { name, email, password, cpassword } = req.body;

    // Validation to ensure all fields are provided
    if (!name || !email || !password || !cpassword) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // No password hashing, store password directly
        const newUser = new User({
            name,
            email,
            password,
            cpassword, // Store plain password
        });

        await newUser.save();

        return res.status(201).json({ message: "User successfully added" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
