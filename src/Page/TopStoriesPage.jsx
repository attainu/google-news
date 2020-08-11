import React, { Component } from "react";
import PostCardList from "../Component/Card/PostCardList";

import { connect } from "react-redux";
import { fetchStories } from "../redux/action/storiesAction";

class TopStoriesPage extends Component {
  componentDidMount() {
    this.props.fetchStories('top-headlines',20);
  }

  render() {
    return this.props.isFetching ? (
      <div>Loading....</div>
    ) : (
      <div>
        <PostCardList stories={this.props.stories} />
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
