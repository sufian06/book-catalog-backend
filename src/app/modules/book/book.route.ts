import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/', BookController.getAllBooks);
router.post('/add-new-book', BookController.addNewBook);

router.get('/:id', BookController.getSingleBook);
router.patch('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export const BookRoutes = router;
