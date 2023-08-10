import express from 'express';
const router = express.Router();
import {
  getCarouselItems,
  createCarouselItem,
  updateCarouselItem,
  deleteCarouselItem,
} from '../controllers/carouselController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(getCarouselItems)
  .post(protect, admin, createCarouselItem);
router
  .route('/:id')
  .put(protect, admin, updateCarouselItem)
  .delete(protect, admin, deleteCarouselItem);

export default router;
