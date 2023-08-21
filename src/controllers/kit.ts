import express from 'express';
import KitsService from '../services/kit-service';
import { GetKitRepository } from '../data/base/setup';
const controller = express.Router();

const kitsService: KitsService = new KitsService(GetKitRepository());

controller.get('/:value', async (req, res) => {
  const {
    params: { value }
  } = req
  try {
    const users = await kitsService.search(value);
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