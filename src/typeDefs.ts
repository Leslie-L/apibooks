export const typeDefs = `#graphql
  type Book {
    id:ID!
    title: String!
    img:String!
    author_id: ID!
    genre:String!
    year:Int
    synopsis:String!
    author:Author
  }
  type Author {
    id:ID!
    name:String!
    birthdate:String!
    deathdate:String
    nationality:String!
    bio:String!
    books:[Book]
  }
  type Query {
    #books
    books: [Book]
    book(id:ID!):Book 
    #authors
    author(id:ID!):Author
    authors:[Author]
  }
  input AddAuthor {
    name:String!
    birthdate:String!
    deathdate:String
    nationality:String!
    bio:String!
  }
  input UpdateAuthor{
    name:String
    birthdate:String
    deathdate:String
    nationality:String
    bio:String
  }
  input AddBook{
    title: String!
    img:String!
    author_id: ID!
    genre:String!
    year:Int!
    synopsis:String!
  }
  input UpdateBook{
    title: String
    img:String
    author_id: ID
    genre:String
    year:Int
    synopsis:String
  }
  type Mutation{
    addAuthor(author:AddAuthor!):Author,
    updateAuthor(id:ID!,info:UpdateAuthor):Author,
    addBook(book:AddBook!):Book,
    updateBook(id:ID!,book:UpdateBook):Book,
  }
`;

