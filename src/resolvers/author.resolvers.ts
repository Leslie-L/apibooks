import { authorsList, booksList } from "../data.js";
export const author = (_,{id})=>{
    return authorsList.find(item=>item.id===id)
}
export const authors =()=>{
    return authorsList
}
export const booksAuthors =(parent)=>{
    return booksList.filter(item=>item.author_id==parent.id)
}