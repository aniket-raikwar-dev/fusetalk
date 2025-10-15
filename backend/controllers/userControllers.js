const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// POST -> USER REGISTER
const userRegisterCtrl = async (req, res, next) => {
  const { email, password, role } = req.body;

  try {
    // check email is exist
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res
        .status(400)
        .json({ message: "Email already has been registered." });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const isManager = role === "manager";

    // create new user account
    const user = await User.create({
      email,
      password: hashedPassword,
      role,
      isManager,
    });

    res.status(200).json({
      message: "User is Successfully Registered.",
      data: user,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
