export const createBookmark =(uid,bookmarks)=> {
    console.log(uid,bookmarks)
    return(dispatch,getState, { getFirebase,getFirestore })=>{
        const firestore = getFirestore();
        firestore.collection('users').doc(uid).collection('bookmarks').add({
            ...bookmarks,
        }).then(()=>{
            dispatch({type : 'Create_BOOKMARK' , bookmarks})
        }).catch((error)=>{
            dispatch({type : 'Create_BOOKMARK_ERROR' , error})
        })
    }
};