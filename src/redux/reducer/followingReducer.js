
const initState ={}


const followingReducer = (state = initState,action)=>{
    switch(action.type){
        case 'Create_BOOKMARK':
            console.log(action.project);
        return state;
        case 'Create_BOOKMARK_ERROR':
            console.log(action.error);
        return state;
        default:
            return state;

    }

}

export default followingReducer