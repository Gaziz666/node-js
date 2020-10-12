const DB = require('../../db');
const TABLE_NAME = 'Users';

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return DB.getAllEntities(TABLE_NAME);
};

const get = async id => {
  const user = await DB.getEntities(TABLE_NAME, id);

  if (!user) {
    throw new Error(`couldn't find user with id ${id}`);
  }

  return user;
};

const create = async user => {
  return DB.addUser(TABLE_NAME, user);
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
    console.log('4040');
    return '404';
    // throw new Error(`couldn't find user with id ${id}`);
  }

  await DB.del(TABLE_NAME, user);
};

module.exports = { getAll, get, create, update, del };
