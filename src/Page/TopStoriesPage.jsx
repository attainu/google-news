import React, { Component } from "react";
import PostCardList from "../Component/Card/PostCardList";
import Pagination from "../Component/Pagination";

import { connect } from "react-redux";
import { fetchStories } from "../redux/action/storiesAction";



class TopStoriesPage extends Component {
  state = {
    currentpageNumber: 1,
    postsPerPage: 5,
  };
  componentDidMount() {
    this.props.fetchStories("top-headlines");
  }

  paginate = (pageNumber) => {
    this.setState({ currentpageNumber: pageNumber });
  };
  render() {
    const indexOfLastStory =
      this.state.currentpageNumber * this.state.postsPerPage;
    const indexOfFirstStory = indexOfLastStory - this.state.postsPerPage;
    const currentStories = this.props.stories.slice(
      indexOfFirstStory,
      indexOfLastStory
    );
    const loaderStyle = {
      marginLeft: "500px",
      marginTop: "300px",
    };
    return this.props.isFetching ? (
      <div className="loader" style={loaderStyle}></div>
    ) : (
      <div>
        <PostCardList stories={currentStories} />
        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.props.stories.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    stories: storeState.storiesStatus.stories,
    isFetching: storeState.storiesStatus.isFetching,
  };
};

export default connect(mapStateToProps, { fetchStories })(TopStoriesPage);
