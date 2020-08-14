export const createFollowing =(following)=> {
    return(dispatch,getState, { getFirebase,getFirestore })=>{
        const firestore = getFirestore();
        firestore.collection('following').add({
            ...following,
        }).then(()=>{

            dispatch({type : 'Create_FOLLOWING' , following})
        }).catch((error)=>{
            
            dispatch({type : 'Create_FOLLOWING_ERROR' , error})
        })
    }
};