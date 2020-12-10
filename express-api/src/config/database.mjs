import { readFileSync } from 'fs';

export const photos = JSON.parse(readFileSync('../data/photos.json'));

export const categories = Array.from(new Set(photos.flatMap(photo => photo.category).filter(Boolean).sort()));
