import { Book } from '../book/book.model';

const getAllReviews = async (id: string) => {
  const result = Book.findOne({ _id: Object(id), reviews: String });

  return result;
};

export const ReviewService = { getAllReviews };
