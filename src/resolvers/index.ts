import { addAuthor, author, authors, booksAuthors, updateAuthor } from "./author.resolvers.js";
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
    },
    Mutation:{
      addAuthor,
      updateAuthor
    }
  };
