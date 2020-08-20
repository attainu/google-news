export const createFollowing =(uid,following)=> {
    return(dispatch,getState, { getFirebase,getFirestore })=>{
        const firestore = getFirestore();
        console.log(uid)
        firestore.collection('users').doc(uid).collection('followings').add({
            ...following,
        }).then(()=>{

            dispatch({type : 'Create_FOLLOWING' , following})
        }).catch((error)=>{
            
            dispatch({type : 'Create_FOLLOWING_ERROR' , error})
        })
    }
};