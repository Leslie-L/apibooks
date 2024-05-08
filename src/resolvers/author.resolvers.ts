import { authorsList } from "../data";
export const author = (_,{id})=>{
    return authorsList.find(item=>item.id===id)
}
export const autors =(_,args)=>{
    return authorsList
}