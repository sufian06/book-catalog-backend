import express from 'express';
import { ReviewController } from './review.controller';

const router = express.Router();

router.get('/:id', ReviewController.getAllReviews);

export const ReviewRoutes = router;
