import {
  createuserService,
  deleteUserService,
  getAllUsersService,
  getUserByIDService,
  updateUserService,
} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  return res.status(status).json({
    message,
    data,
  });
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await createuserService(name, email, password);
    handleResponse(res, 201, "User created successfully", result);
  } catch (error) {
    console.log(error);
    handleResponse(res, 500, "Internal Server Error");
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const result = await getAllUsersService();
    return handleResponse(res, 200, "Users fetched successfully", result);
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, "Internal Server Error");
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getUserByIDService(id);
    if (!result) {
      return handleResponse(res, 404, "User not found");
    }
    return handleResponse(res, 200, "User fetched successfully", result);
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, "Internal Server Error");
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const result = await updateUserService(id, name, email, password);
    if (!result) {
      return handleResponse(res, 404, "User not found");
    }
    return handleResponse(res, 200, "User updated successfully", result);
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, "Internal Server Error");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteUserService(id);
    if (!result) {
      return handleResponse(res, 404, "User not found");
    }
    return handleResponse(res, 200, "User deleted successfully", result);
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, "Internal Server Error");
  }
};
