export default (state,actionProp) => {
    switch(actionProp.type){
        case 'REMOVE_ACTION':
            return {
                ...state,
                actions: state.actions.filter(action => action.id !== actionProp.payload),
            }

        case 'ADD_ACTION':
            return{
                ...state,
                actions: [actionProp.payload, ...state.actions]
            }
        default:
            return state;
    }
    
}