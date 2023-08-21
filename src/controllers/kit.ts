import express from 'express';
import KitsService from '../services/kit-service';
import { GetKitRepository } from '../data/base/setup';
import { FilterType } from '../models/filter-type';
const controller = express.Router();

// The proper way to handle validation correctly would be for this to be a POST.
// I personally hate doing a POST to GET values, so here is some ugly code
controller.get('/:type/:value', async (req, res) => {
  const {
    params: { value, type }
  } = req;
  if(type in FilterType) {
    try {
      // scoped, business layer services should be scoped per request. This is useful in a mult-tenant app. otherwise not great memory wise
      const kitsService = new KitsService(GetKitRepository());
      const kits = await kitsService.search(value, type as FilterType);
      res.json(kits);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  } else {
    res.status(400).send('Filter type is not valid');
  }
})

controller.get('/:id', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
      // scoped, business layer services should be scoped per request. This is useful in a mult-tenant app. otherwise not great memory wise
    const kitsService = new KitsService(GetKitRepository());
    const user = await kitsService.getById(id)
    res.send(user);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
})

export default controller;