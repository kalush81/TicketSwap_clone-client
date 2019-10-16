

export const authenticateReducer = (state = {authenticated : false, userId: 0, jwt: ''}, action={}) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, authenticated: true}
        case 'LOGOUT': 
            return {...state, authenticated: false, userId: 0, jwt: ''}
        case 'SET_USER_ID':
            return {...state, userId: action.payload}   
        case 'SET_JWT':
            return {...state, jwt: action.payload.jwt, userId: action.payload.userId}     
        default:
            return state    
    }
}