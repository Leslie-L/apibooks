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
export const addAuthor = (_,args)=>{
    const id = crypto.randomUUID()
    const data = {
        ...args.author,
        id
    }
    console.log(data)
    authorsList.push(data)
    return data
}
export const updateAuthor=(_,args)=>{
    const {id,info}=args
    const index = authorsList.findIndex(item=>item.id===id)
    authorsList[index] = {
        ...authorsList[index],
        ...info
    }
    return authorsList[index]
}