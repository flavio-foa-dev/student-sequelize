const db = require('../models');

class UsersController {

  static async getUsers(req, res) {
    const users = await db.User.findAll();
    return res.status(200).json(users);
  }

  static async getUserById(req, res) {
    const id = req.params.id;
    const user = await db.User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    };
    delete user.dataValues.password;

    return res.status(200).json(user);
  }
}

module.exports = UsersController;