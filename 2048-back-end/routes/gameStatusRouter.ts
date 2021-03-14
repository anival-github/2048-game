import { v4 as uuid } from 'uuid'
import { Router } from 'express';
import * as storage from '../storage/mongo'

const router = Router();

/* GET gamestatus listing. */
router.get('/', async (req, res, next) => {
  try {
    const list = await storage.listAll()
    res.json(list)
  } catch (e) {
    res.status(500).json({ message: 'something went wrong. Try one more time.'})
  }
})

router.post('/', async (req, res, next) => {
  const id = uuid();

  const { body } = req
  body.id = id;

  const newBody = await storage.create(body);

  res.json(newBody)
});

router.delete('/', async (req, res, next) => {

  const result = await storage.remove({});

  res
      .status(204)
      .json(result)
});

router.put('/:id', async (req, res, next) => {
  const { body } = req

  const newBody = await storage.update({
    ...body,
    id: req.params.id,
  });

  res.json(newBody)
});

export default router;
