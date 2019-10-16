import { combineReducers } from "redux";

import { authenticateReducer } from './authenticateReducer';
import { eventsReducer } from './events';
import { dbEventsReducer } from './dbEventsReducer';
//import { userReducer } from './userIdReducer';

export default combineReducers({
    auth: authenticateReducer,
    myEvents: eventsReducer,
    dbEvents: dbEventsReducer,
    //userId: userIdReducer
});
