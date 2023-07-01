import User from "../models/User.js";
import bcrypt from "bcryptjs";

// create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update User
export const updateUserInfo = async (req, res) => {
  const id = req.params.id;
  // const {username} = req.body;
  // console.log(id)
  // console.log(req.body);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Thông tin đã được sửa đổi, vui lòng đăng nhập lại để được cập nhật!",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};
//update userpass
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { formOldPassword, formNewPassword, formConfirmPassword } = req.body;
  try {
    // Find user by id
    const user = await User.findById(id);
    // console.log(user);
    // Verify old password
    // console.log(req.body);
    if(formConfirmPassword !== formNewPassword){
      return res.status(400).json({ message: "Không trùng khớp mật khẩu mới!!!" });  
    }
    const isMatch = await bcrypt.compare(formOldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mật Khẩu Cũ Không Đúng!!!" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(formNewPassword, salt);

    // Update user with new hashed password
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { password: hashedPassword },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};

// getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    // res.status(200).json({
    //   success: true,
    //   message: "Successful",
    //   data: users,
    // });
    res.json(users);
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
