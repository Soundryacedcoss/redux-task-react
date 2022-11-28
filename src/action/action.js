export const add_item=(nameval,number,email,addres)=>{
    return{
        type:"ADD_ITEM",
        payload:{
            id:Math.random(),
            nameval:nameval,
            email:email,
            addres:addres,
            number:number,
        }
    }
}
export const delete_item=(id)=>{
    return{
        type:"DELETE_ITEM",
        id
    }
}