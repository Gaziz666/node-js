const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  res.status(200).send(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const result = await usersService.del(req.params.id);
  if (result === '404') {
    console.log('404');
    res.sendStatus(404);
  }
  res.sendStatus(200);
});

module.exports = router;
