import { Router } from 'express';
import photos from '../../../data/photos.json';

export const router = Router();

router.get('/', (req, rsp, next) => {
  rsp.status(200).json(photos);
});

router.get('/:id', (req, rsp, next) => {
  const photoId: number = parseInt(req.params.id, 10);

  if (photoId > photos.length) {
    rsp.status(404).json({ message: `No photo found where id = ${photoId}`});
  } else {
    rsp.status(200).json(photos[photoId]);
  }
});
