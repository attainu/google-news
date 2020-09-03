import React, { Component } from 'react'
import firebase from '../Config/firebase.config'
import './css/ProfileEdit.css'
import { Link,Redirect } from 'react-router-dom';
import { connect } from "react-redux";


export class ProfileEditPage extends Component {
    state = {
        email: "",
        photoURL: "",
        displayName: "",
        image: null,
        progress: 0
    };
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.id]: event.target.value,
        });
    };
    handleFileChange = (event) => {
        if (event.target.files[0]) {
            const image = event.target.files[0];
            this.setState(() => ({image}));
        }
    };
    handleProfile = (event) => {
        event.preventDefault();
        const{email,photoURL,displayName,image}=this.state
        console.log(image)
        firebase
        .storage()
        .ref(`photoURL/${image.name}`)
        .put(image)
        .on('state_changed',(snapshot)=>{
            
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log(progress)
                this.setState({progress});
        }, 
        (error) => {
            
            console.log(error);
        },     () => {
        
            firebase
            .storage()
            .ref('photoURL').child(image.name).getDownloadURL().then(photoURL => {
                console.log(photoURL);
                this.setState({photoURL});

                firebase.auth().currentUser.updateProfile({
                    displayName: displayName,
                    photoURL: photoURL,
                    email: email
                }).then(function() {
                    console.log('success')
                    
                }).catch(function(error) {
                    console.error(error)
                });

            })
        }
        );
    };

    componentDidMount(){
        const{auth}=this.props   
        this.setState({
            displayName : auth.displayName,
            email : auth.email
        });

    }


    render() {
        const {auth } = this.props;
        const {displayName,email } = this.state;
        if (!auth.uid) return <Redirect to='/login' />
        
        return (
            <div className='Profile'>
            <div className='profileEdit'>
            <progress className='progress' value={this.state.progress} max="100"/>
            <div className='closeSection'>                
                <Link to='/'>
                <button className='closeButton'><i className="fas fa-times" /></button>
                </Link>
                </div>
                        <form action="#">
                        <h1>Update Profile</h1>
                        {/* <img src={auth.photoURL} alt="ProfileImage"/> */}
                        <input type="file" id="photoURL" name="img" accept="image/*" onChange={this.handleFileChange} />
                        <input type="text" placeholder="Name" id='displayName' onChange={this.handleChange} value={displayName} />
                        <input type="email" placeholder="Email" id='email' onChange={this.handleChange} value={email} />
                        <button id='submitProfile' onClick={this.handleProfile}>Update Profile</button>
                    </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
};

export default connect(mapStateToProps,null)(ProfileEditPage)
