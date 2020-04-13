import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Typescript' });
});

routes.post('/user', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };

  return res.json(user);
});
export default routes;
