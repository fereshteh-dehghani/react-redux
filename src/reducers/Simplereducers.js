

const SimpleReducer = (state ={}, action) =>{
    switch(action.type){
        case 'SIMPLE-ACTION':
            return{
                result:action.payload,
            }
            default:
                return state;
    }

}
export default SimpleReducer;