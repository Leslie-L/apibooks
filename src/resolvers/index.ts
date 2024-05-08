import { author, authors } from "./author.resolvers.js";
import { book,books } from "./book.resolvers.js";

export const resolvers = {
    Query: {
      book,
      books,
      author,
      authors
    },
  };
