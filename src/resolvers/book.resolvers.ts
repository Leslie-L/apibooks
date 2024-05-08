import { booksList } from "../data"

export const books = (_,args)=>{
    return booksList
}
export const book = (_,{id})=>{
    return booksList.find(item=>item.id===id)
}
