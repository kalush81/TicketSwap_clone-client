export const login2 = () => {
    return {
        type: 'LOGIN'
    }
}

export const logout = () => {
    //setTimeout(()=> {window.location.reload()}, 1) 
    return {
        type: 'LOGOUT'
    }
}