const initialData = {
    list: []
}

const todoReducers = (state=initialData, action) => {
   switch (action.type) {
       case "ADD_ITEMS":
           const {id, data} = action.payload

           return {
               ...state,
               list: [
                   ...state.list,
                   {
                        id:id,
                        data:data
                   }
               ]
           }
        
        case "DELETE_ITEM" :
            const newList = state.list.filter((elem)=>elem.id !== action.id)
            return{
                ...state,
                list: newList
            }
        
        case "DELETE_ALL" :
            return{
                ...state,
                list: []
            }
       
       default:
           return state;
   }
}

export default todoReducers