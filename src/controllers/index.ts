import express from 'express';
import kitController from './kit';

const router = express.Router();
router.use('/kit', kitController);

export default router;