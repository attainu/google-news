export const signIn = (credentials) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                });
            })
            .catch((err) => {
                dispatch({
                    type: "LOGIN_ERROR",
                    err,
                });
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({
                    type: "SIGNOUT_SUCCESS"
                });
            });
    };
};

export const signUp = (newUser) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((user) => {
            console.log(newUser.displayName)
            console.log(user)
            if(user)
            {firebase.auth().currentUser.updateProfile({
                displayName: newUser.displayName,
            }).then(function() {
                console.log('success')
                dispatch({
                    type: 'SIGNUP_SUCCESS'
                });
            }).catch(function(error) {
                console.error(error)
            });}
            
        }).catch((err) => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err
            });
        });
    }
}