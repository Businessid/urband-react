import { FETCH_EVENTDETAIL } from '../actions/types';

const initialState ={
    data:[]
}

const eventDetailReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_EVENTDETAIL:
          return{
              ...state,
           
              data: action.value
          }
    default:
        return state; 
  }  
}
export default eventDetailReducer;

