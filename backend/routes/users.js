const router = require('express').Router();
const {
  getUsers,
  getProfile,
  createProfile,
  deleteProfile,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:id', getProfile);
router.post('/users', createProfile);
router.delete('/users/:id', deleteProfile);

module.exports = router;
