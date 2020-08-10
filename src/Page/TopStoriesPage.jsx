import React, { Component } from "react";
import NewsCardContainer from "../Component/NewsCardContainer/NewsCardContainer";

import { connect } from "react-redux";
import { fetchTopStories } from "../redux/action/topStoriesAction";

class TopStoriesPage extends Component {
  componentDidMount() {
    this.props.fetchTopStories();
  }

  render() {
    return this.props.isFetching ? (
      <div>Loading....</div>
    ) : (
      <div>
        <NewsCardContainer stories={this.props.stories} />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    stories: storeState.topStoriesStatus.stories,
    isFetching: storeState.topStoriesStatus.isFetching,
  };
};

export default connect(mapStateToProps, { fetchTopStories })(TopStoriesPage);
