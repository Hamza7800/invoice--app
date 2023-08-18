import User from '../models/userModel.js';
import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from '../utils/generateToken.js';


// @desc    Create/Register User
// @route   POST '/api/users'
// @access  Public
const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    throw new Error('Password and Confirm Password as are not the same');
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User Already exists');
  }

  const registerUser = await User.create({ name, email, password });

  if (registerUser) {
    generateToken(res, registerUser._id);

    res.status(201).json({
      email: registerUser.email,
      name: registerUser.name,
      _id: registerUser._id
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});


// @desc    Login User
// @route   POST '/api/users/login'
// @access  Public
const loginUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email }).select('+password');
  if (!user) {
    throw new Error('User Not Found');
  }

  if (user && await user.matchPassword(req.body.password, user.password)) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }

});


// @desc    Logout User
// @route   POST '/api/users/logout'
// @access  Private
const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expiresIn: new Date(0)
  });

  res.json({ message: "Logout success" });

});


export {
  createUser,
  loginUser,
  logoutUser
};