import React, { Component } from 'react'
import firebase from '../Config/firebase.config'


class FollowingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followings: []
        };
    }
    componentDidMount() {
        firebase.firestore().collection("followings")
            .get()
            .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ followings: data });
            });
        }

    render() {
        const { followings } = this.state;
        return (
            <div>
                {/*<SourceCardList stories={followings} /> */}
            </div>
        );
    }}

export default FollowingPage;

