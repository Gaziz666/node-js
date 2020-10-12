const DB = require('../../db');
const TABLE_NAME = 'Boards';

const getAll = async () => {
  return DB.getAllEntities(TABLE_NAME);
};

const create = async board => {
  return DB.addUser(TABLE_NAME, board);
};

const get = async id => {
  const board = await DB.getEntities(TABLE_NAME, id);

  if (!board) {
    throw new Error(`couldn't find board with id ${id}`);
  }

  return board;
};

const update = async (id, body) => {
  const user = await DB.getEntities(TABLE_NAME, id);
  if (!user) {
    throw new Error(`couldn't find user with id ${id}`);
  }

  return await DB.update(TABLE_NAME, user, body);
};

const del = async id => {
  const user = await DB.getEntities(TABLE_NAME, id);

  if (!user) {
    return '404';
    // throw new Error(`couldn't find user with id ${id}`);
  }
  console.log(id, user);
  await DB.del(TABLE_NAME, user);
};

module.exports = {
  getAll,
  create,
  get,
  update,
  del
};
