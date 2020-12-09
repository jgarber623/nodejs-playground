import { Router } from 'express';
import { photos } from '../config/database.mjs';

export const router = Router();

router.get('/', (req, rsp, next) => {
  rsp.status(200).json(photos);
});

router.get('/:id', (req, rsp, next) => {
  const photoId = req.params.id;

  if (photoId > photos.length) {
    rsp.status(404).json({ message: `No photo found where id = ${photoId}`});
  } else {
    rsp.status(200).json(photos[photoId]);
  }
});
