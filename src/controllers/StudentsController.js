import { createStudentServices, getStudentsServices, getUserByIdServices, loginServices } from '../services/StudentServices';

export const createStudentController = async (req, res) => {
  try {
    let { name, password } = req.query;
    if (!name || !password) {
      return res.status(400).json({
        status: 'err',
        message: 'Name and password is required'
      });
    }
    const responsse = await createStudentServices(name, password);
    return res.status(200).json(responsse);
  } catch (err) {
    return res.status(500).json({
      status: 'err',
      message: 'Internal server error'
    });
  }
};

export const login = async (req, res) => {
  try {
    let { name, password } = req.query;
    if (!name || !password) {
      return res.status(400).json({
        status: 'err',
        message: 'Name and password is required'
      });
    }
    const responsse = await loginServices(name, password);
    return res.status(200).json(responsse);
  } catch (err) {
    return res.status(500).json({
      status: 'err',
      message: 'Internal server error'
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const responsse = await getStudentsServices();
    return res.status(200).json(responsse);
  } catch (err) {
    return res.status(500).json({
      status: 'err',
      message: 'Internal server error'
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.query;
    const responsse = await getUserByIdServices(id);
    return res.status(200).json(responsse);
  } catch (err) {
    return res.status(500).json({
      status: 'err',
      message: 'Internal server error'
    });
  }
};
