import { Model, Schema, model } from 'mongoose';
import { IBook } from './book.interface';

type BookModel = Model<IBook, object>;

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: Date,
    },
    image: {
      type: String,
    },
    descriptions: {
      type: String,
    },
    reviews: {
      type: [],
    },
  },
  {
    timestamps: true,
  },
);

bookSchema.pre('save', async function (next) {
  // const book = this;

  if (!this.publicationDate) {
    this.publicationDate = new Date();
  }

  next();
});

export const Book = model<IBook, BookModel>('Book', bookSchema);
