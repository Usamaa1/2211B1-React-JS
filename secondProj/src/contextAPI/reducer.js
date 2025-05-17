const reducer = (state, action)=>{

    switch (action.type) {
        case 'CHANGE_THEME':
            
            return {...state, theme: state.theme}
        case 'CHANGE_USER':
            
            break;
    
        case 'USER_LOGOUT':
            
            break;
    
        default:
            return state;
    }

}

export default reducer;