const boardsRepo = require('./boards.memory.repository');
const Board = require('./boards.model');

const getAll = () => boardsRepo.getAll();

const create = board => {
  return boardsRepo.create(new Board(board));
};

const get = id => boardsRepo.get(id);

const update = (id, body) => {
  return boardsRepo.update(id, body);
};

const del = id => {
  return boardsRepo.del(id);
};

module.exports = {
  getAll,
  create,
  get,
  update,
  del
};
