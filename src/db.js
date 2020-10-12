const User = require('./resources/users/user.model');

const db = {
  Users: [
    {
      id: '555',
      name: 'USER',
      login: 'user'
    }
  ]
};

db.Users.push(new User(), new User(), new User());

const getAllEntities = async tableName => {
  return db[tableName].filter(item => item);
};

const getEntities = async (tableName, id) => {
  const entities = db[tableName].filter(item => item.id === id);

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
  db[tableName][index].name = body.name;
  db[tableName][index].login = body.login;
  db[tableName][index].password = body.password;
  return db[tableName][index];
};

const del = (tableName, user) => {
  db[tableName] = db[tableName].filter(item => item !== user);
};

module.exports = {
  getAllEntities,
  getEntities,
  addUser,
  update,
  del
};
