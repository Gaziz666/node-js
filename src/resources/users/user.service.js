const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = user => {
  return usersRepo.create(new User(user));
};

const update = (id, body) => {
  return usersRepo.update(id, body);
};

const del = id => {
  return usersRepo.del(id);
};

module.exports = {
  getAll,
  get,
  create,
  update,
  del
};
