import { IBook } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload);

  return result;
};

const getAllBooks = async () => {
  const result = await Book.find();

  return result;
};

const getSingleBook = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};

const updateBook = async (payload: Partial<IBook>) => {
  const result = await Book.updateOne(payload);
  return result;
};

const deleteBook = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
