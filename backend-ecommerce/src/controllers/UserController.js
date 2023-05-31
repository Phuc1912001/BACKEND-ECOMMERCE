const UserService = require("../services/UserService");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createUser,
};
