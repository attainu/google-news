
const initState ={}


const followingReducer = (state = initState,action)=>{
    switch(action.type){
        case 'Create_FOLLOWING':
            console.log(action.project);
        return state;
        case 'Create_FOLLOWING_ERROR':
            console.log(action.error);
        return state;
        default:
            return state;

    }

}

export default followingReducer