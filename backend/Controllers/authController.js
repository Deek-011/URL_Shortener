const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/User');

const signup = async (req, res) => {
  try {
    const { name, email, mobilenumber, password } = req.body;

    // Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: 'User already exists. You can login.',
        success: false,
      });
    }

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const userModel = new UserModel({
      name,
      email,
      mobilenumber,
      password: hashedPassword,
    });
    console.log("check");
    await userModel.save();
    console.log("check2");

    res.status(201).json({
      message: 'Signed up successfully',
      success: true,
    });
  } catch (err) {
    console.error('Error details:', err.message, err);
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const user = await UserModel.findOne({ email });
    const errMsg = 'Auth Failed! Email or Password is Wrong';
    if (!user) {
      return res.status(403)
      .json({
        message: errMsg,
        success: false,
      });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if(!isPassEqual){
      return res.status(403)
      .json({
        message: errMsg,
        success: false,
    });
  }
    const jwtToken = jwt.sign(
      {email: user.email, _id: user._id },
      process.env.JWT_SECRET
      // { expiresIn: '24h'}
    )
    res.status(200).json({
      message: 'Login successfull',
      success: true,
      jwtToken,
      email,
      name: user.name
    })
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    })
  }
}

module.exports = {
  signup,
  login
}
