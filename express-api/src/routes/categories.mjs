import { Router } from 'express';
import { categories, photos } from '../config/database.mjs';

export const router = Router();

router.get('/', (req, rsp, next) => {
  rsp.status(200).json(categories);
});

router.get('/:category', (req, rsp, next) => {
  const matchedPhotos = photos.filter(photo => {
    return photo.category && photo.category.includes(req.params.category);
  });

  if (matchedPhotos.length) {
    rsp.status(200).json(matchedPhotos);
  } else {
    rsp.status(404).json({ message: `No photos found with category = ${req.params.category}` });
  }
});
