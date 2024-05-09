import { booksList, authorsList } from "../data.js"

export const books = ()=>{
    return booksList
}
export const book = (_,{id})=>{
    return booksList.find(item=>item.id===id)
}

export const bookAuthor = (parent)=>{
    return authorsList.find(item=>item.id===parent.author_id)
}
export const addBook = (_,args)=>{
    const id = crypto.randomUUID()
    const data = {
        ...args.book,
        id
    }
    booksList.push(data)
    return data
}
export const updateBook=(_,args)=>{
    const {id,info}=args
    const index = booksList.findIndex(item=>item.id===id)
    booksList[index] = {
        ...booksList[index],
        ...info,
    }
    return booksList[index]
}