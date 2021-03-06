import React, { Component } from "react";
import { fetchWorldNews } from "../redux/action/worldNewsAction";
import PostCardList from "../Component/Card/PostCardList";
import Pagination from '../Component/Pagination'

import { connect } from "react-redux";

class WorldNewsPage extends Component {
  state = {
    currentpageNumber: 1,
    postsPerPage: 10,
  }
  componentDidMount() {
    this.props.fetchWorldNews();
  }

  paginate = (pageNumber) => {
    this.setState({currentpageNumber: pageNumber})
   }
   
  render() {
    const indexOfLastStory = this.state.currentpageNumber * this.state.postsPerPage;
    const indexOfFirstStory = indexOfLastStory - this.state.postsPerPage;
    const currentStories = this.props.worldStories.slice(indexOfFirstStory, indexOfLastStory);

    const loaderStyle = {
      marginLeft: "600px",
      marginTop: "300px",
    };
    return this.props.isFetching ? (
      <div className="loader" style={loaderStyle}></div>
    ) :(
      <div>
        <PostCardList stories={currentStories} />
        <Pagination postsPerPage = {this.state.postsPerPage} totalPosts = {this.props.worldStories.length} paginate = {this.paginate}/>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    worldStories: storeState.worldNewsStatus.stories,
    isFetching: storeState.worldNewsStatus.isFetching,
  };
};
export default connect(mapStateToProps, { fetchWorldNews })(WorldNewsPage);
