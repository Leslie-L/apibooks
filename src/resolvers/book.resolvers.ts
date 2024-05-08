import { booksList, authorsList } from "../data.js"

export const books = (_,args)=>{
    return booksList
}
export const book = (_,{id})=>{
    return booksList.find(item=>item.id===id)
}

export const bookAuthor = (parent)=>{
    return authorsList.find(item=>item.id===parent.id)
}