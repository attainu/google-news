import db from '../../Config/firebase.config'

export const fetchFirebaseData = () => async (dispatch) => {
    try {
        dispatch({
            type: "TOGGLE_GET_FIREBASE_STATE"
        });
        db.collection('bookmarks').get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        // const data = 

        // dispatch({
        //     type: "GET_DATA",
        //     payload: "data"
        // });
    } catch (err) {
        console.log(err.message);
    } finally {
        dispatch({
            type: "TOGGLE_GET_FIREBASE_STATE"
        });
    }
};