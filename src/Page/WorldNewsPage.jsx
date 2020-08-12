import React, { Component } from "react";
import { fetchWorldNews } from "../redux/action/worldNewsAction";
import PostCardList from "../Component/Card/PostCardList";

import { connect } from "react-redux";

class WorldNewsPage extends Component {
  componentDidMount() {
    this.props.fetchWorldNews();
  }
  render() {
    return (
      <div>
        <PostCardList stories={this.props.worldStories} />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    worldStories: storeState.worldNewsStatus.stories,
  };
};
export default connect(mapStateToProps, { fetchWorldNews })(WorldNewsPage);
