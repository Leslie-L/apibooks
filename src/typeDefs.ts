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
`;

