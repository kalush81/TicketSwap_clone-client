
export const dbEventsReducer = (state = [], action={}) => {
    switch(action.type) {
        case 'LOAD_EVENTS_FROM_DB':
            return [...state, ...action.event]
        default:
            return state    
    }
}