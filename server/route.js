import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  res.send('This is home');
});

export default route;
