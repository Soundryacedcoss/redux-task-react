export const add_item=(data,number,email,addres)=>{
    return{
        type:"ADD_ITEM",
        payload:{
            id:Math.random(),
            data:data,
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