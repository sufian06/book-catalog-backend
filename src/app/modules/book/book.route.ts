import express from 'express';

const router = express.Router();

router.post('/create-book', BookController.createBook);

export const BookRoutes = router;
