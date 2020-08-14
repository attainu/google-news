export const createBookmark =(bookmarks)=> {
    return(dispatch,getState, { getFirebase,getFirestore })=>{
        const firestore = getFirestore();
        firestore.collection('bookmarks').add({
            ...bookmarks,
        }).then(()=>{

            dispatch({type : 'Create_BOOKMARK' , bookmarks})
        }).catch((error)=>{
            
            dispatch({type : 'Create_BOOKMARK_ERROR' , error})
        })
    }
};