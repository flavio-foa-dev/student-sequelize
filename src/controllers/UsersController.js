const db = require('../models');

class UsersController {

  static async getUsers(req, res) {
    const users = await db.User.findAll();
    return res.status(200).json(users);
  }

  static async getUserById(req, res) {
    const id = req.params.id;
    const user = await db.User.findOne({where:{id: id}});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    };
    delete user.dataValues.password;
    return res.status(200).json(user);
  }

  static async createUser(req, res) {
    const  { userName, email, password } = req.body;
    const values = {active: 1, role: "user"};
    Object.assign( values, req.body);
    const result = await  db.User.create(values);
    return res.status(201).json({ message:"created" });
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const user = req.body;
    await db.User.update(user, {where: {id: Number(id)}});
    return res.status(201).json({ message: "updated done" });
  }

  static async destroyUser(req, res) {
    const { id } = req.params;
    await db.User.destroy({where: {id: Number(id)}});
    return res.status(200).json({message: 'User deleted successfully'});
  }

}

module.exports = UsersController;