import { booksList } from "../data.js"

export const books = (_,args)=>{
    return booksList
}
export const book = (_,{id})=>{
    return booksList.find(item=>item.id===id)
}
