import express from 'express';
import KitsService from '../services/kit-service';
const controller = express.Router();

const kitsService = new KitsService();

controller.get('/', async (req, res) => {
  try {
    const users = await kitsService.search()
    res.json(users);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
})

controller.get('/:id', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const user = await kitsService.getById(id)
    res.send(user);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
})

export default controller;