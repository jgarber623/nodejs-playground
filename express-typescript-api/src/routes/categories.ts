import { Router } from 'express';
import photos from '../../../data/photos.json';

const photosWithCategory = (category: string) => {
  return photos.filter(photo => {
    return photo.category && photo.category.includes(category);
  });
};

const categories = Array.from(new Set(photos.filter(photo => photo.category).flatMap(photo => photo.category).sort()));

export const router = Router();

router.get('/', (req, rsp, next) => {
  rsp.status(200).json(categories);
});

router.get('/:category', (req, rsp, next) => {
  const matchedPhotos = photosWithCategory(req.params.category);

  if (matchedPhotos.length) {
    rsp.status(200).json(matchedPhotos);
  } else {
    rsp.status(404).json({ message: `No photos found with category = ${req.params.category}` });
  }
});
