import React, { Component } from "react";
import NewsCardContainer from "../Component/NewsCardContainer/NewsCardContainer";

import { connect } from "react-redux";
import { fetchStories } from "../redux/action/storiesAction";

class TopStoriesPage extends Component {
  componentDidMount() {
    this.props.fetchStories('top-headlines', 20);
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
    stories: storeState.storiesStatus.stories,
    isFetching: storeState.storiesStatus.isFetching,
  };
};

export default connect(mapStateToProps, { fetchStories })(TopStoriesPage);
