import React, { Component } from "react";
import { fetchWorldNews } from "../redux/action/worldNewsAction";
import NewsCardContainer from "../Component/NewsCardContainer/NewsCardContainer";

import { connect } from "react-redux";

class WorldNewsPage extends Component {
  componentDidMount() {
    this.props.fetchWorldNews();
  }
  render() {
    return (
      <div>
        <NewsCardContainer stories={this.props.worldStories} />
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
