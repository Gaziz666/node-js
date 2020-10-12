const router = require('express').Router();
// const Board = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const users = await boardsService.getAll();
  res.status(200).send(users);
});

router.route('/').post(async (req, res) => {
  const user = await boardsService.create(req.body);
  res.status(200).send(user);
});

router.route('/:id').get(async (req, res) => {
  const user = await boardsService.get(req.params.id);
  res.status(200).send(user);
});

router.route('/:id').put(async (req, res) => {
  const user = await boardsService.update(req.params.id, req.body);
  res.status(200).send(user);
});
/*
router.route('/:id').delete(async (req, res) => {
  await boardsService.del(req.params.id);
  res.sendStatus(200);
  /* try {
    await boardsService.del(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }
});
*/
module.exports = router;
