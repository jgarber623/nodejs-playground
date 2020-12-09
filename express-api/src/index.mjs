import express from 'express';

import { PORT } from './config/constants.mjs';
import { router as categoriesRouter } from './routes/categories.mjs';
import { router as photosRouter } from './routes/photos.mjs';

export const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/photos', photosRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
