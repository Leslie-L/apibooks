import { author, authors, booksAuthors } from "./author.resolvers.js";
import { book,bookAuthor,books } from "./book.resolvers.js";

export const resolvers = {
    Query: {
      book,
      books,
      author,
      authors
    },
    Book:{
      author:bookAuthor
    },
    Author:{
      books:booksAuthors
    }
  };
