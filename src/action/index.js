export const addItems = (data) =>{
    return {
        type: "ADD_ITEMS",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteItem = (id) =>{
    return{
        type: "DELETE_ITEM",
        id:id
    }
}

export const deleteAll = () =>{
    return{
        type: "DELETE_ALL"
    }
}