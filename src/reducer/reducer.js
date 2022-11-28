const intial_data={
    list:[]
}
const reducer=(state=intial_data,action)=>{
   switch(action.type){
    case 'ADD_ITEM':
    const {id,nameval,email,number,addres}=action.payload; 
    return{
        ...state,
        list:[
              ...state.list,
        {
            id:id,
            nameval:nameval,
            email:email,
            addres:addres,
            number:number,
        }
        ]
    }
    case 'DELETE_ITEM':
        console.log(state.list);
    const Remaining_item=state.list.filter((item)=> item.id!==action.id)
    return{
        ...state,
        list:Remaining_item
    }
    default : return state
   }
}
export default reducer;