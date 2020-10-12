const User = require('./resources/users/user.model');
const Board = require('./resources/boards/boards.model');

const db = {
  Users: [
    {
      id: '555',
      name: 'USER',
      login: 'user'
    }
  ],
  Boards: [
    {
      id: '111',
      title: 'string',
      columns: [
        {
          id: '222',
          title: 'string',
          order: 0
        }
      ]
    }
  ]
};

db.Users.push(new User(), new User(), new User());
db.Boards.push(new Board());

const getAllEntities = async tableName => {
  return db[tableName].filter(item => item);
};

const getEntities = async (tableName, id) => {
  const entities = db[tableName].filter(item => item.id === id);
  console.log(db[tableName]);

  if (entities.length > 1) {
    console.error(`The DB is damaged. Table ${tableName}. Entity id ${id}`);
    throw new Error('The DB is Wrong!');
  }

  return entities[0];
};

const addUser = (tableName, user) => {
  db[tableName].push(user);

  return getEntities(tableName, user.id);
};

const update = (tableName, user, body) => {
  const index = db[tableName].indexOf(user);
  db[tableName][index] = { ...body };

  return db[tableName][index];
};

const del = (tableName, user) => {
  db[tableName] = db[tableName].filter(item => {
    if (item === user) {
      return null;
    }
    return item;
  });
};

module.exports = {
  getAllEntities,
  getEntities,
  addUser,
  update,
  del
};
