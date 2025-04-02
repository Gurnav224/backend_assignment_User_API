import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { name, email, address, password, bio, profilePictureUrl } = req.body;
  try {
    if (!name || !email || !address || !password) {
      return res
        .status(400)
        .json({ error: "name, email, address , password are required" });
    }

    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(400).json({ error: "User already register" });
    }

    const user = new User({
      name,
      email,
      address,
      password,
      bio,
      profilePictureUrl,
    });

    await user.save();

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });

    res.status(201).json(token);
  } catch (error) {
    console.error("error to register new error", error);
    res.status(500).json({ error: "error to register new user" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }

    if (!user.validatePassword(password)) {
      return res.status(401).json({ error: "Password Invalid" });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json(token);
  } catch (error) {
    console.error("failed to login user", error);
    res.status(500).json({ error: "error to login the user" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user_id });

    res.status(200).json({ message: "welcome to dashboard", user });
  } catch (error) {
    res.status(500);
  }
};

export const updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { name, email, address, password, bio, profilePictureUrl } = req.body;
  try {

    const user = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        address,
        password,
        bio,
        profilePictureUrl,
      },
      { new: true }
    );

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("failed to update the user profile", error);
    res.status(500).json({ error: "failed to udpated user profile" });
  }
};
