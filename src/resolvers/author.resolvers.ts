import { authorsList } from "../data.js";
export const author = (_,{id})=>{
    return authorsList.find(item=>item.id===id)
}
export const authors =(_,args)=>{
    return authorsList
}