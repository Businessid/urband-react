import {combineReducers} from 'redux'; 
import postReducer from './postReducer'; // here postReducer is like State includes return some objects 
import clientReducer from './clientReducer';
import clientsListReducer from './clientsListReducer';
import eventListReducer from './eventListReducer';
export default combineReducers({
    posts: postReducer, // choose any name
    clients: clientReducer,
    clientslist: clientsListReducer,
    events: eventListReducer
})
