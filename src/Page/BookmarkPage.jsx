import React,{Component} from "react";
import PostCardList from "../Component/Card/PostCardList";
import firebase from '../Config/firebase.config'

class BookmarkPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: []
        };
    }
    componentDidMount() {
        firebase.firestore().collection("bookmarks")
            .get()
            .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ bookmarks: data });
            });
        }

    render() {
        const { bookmarks } = this.state;
        return (
            <div>
                <PostCardList stories={bookmarks}/>
            </div>
        );
    }
}


export default BookmarkPage;
