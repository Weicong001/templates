import express from 'express';
import User from '../mongo/model/user.js';

const router = express.Router();

router.get('/list', async (req, res) => {
  let users = await User.find();
  res.json({
    Code: '200',
    Data: users,
  });
});

router.post('/add', async (req, res) => {
  let users = await User.insertMany([{ userId: 1, nickname: 'Jack' }]);
  res.json({
    Code: '200',
    Message: '添加成功',
    Data: users,
  });
});

router.put('/userId/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    Code: '200',
    Data: id,
  });
});

export default router;
