import React, { Component } from "react";
import PostCardList from "../Component/Card/PostCardList";
import { connect } from "react-redux";
import { fetchSearchResults } from "../redux/action/searchAction";

class SearchResultPage extends Component {
  componentDidMount() {
    this.props.fetchSearchResults(this.props.match.params.search, 20);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.search !== prevProps.match.params.search) {
      this.props.fetchSearchResults(this.props.match.params.search);
    }
  }
  render() {
    return (
      <div>
        <PostCardList stories={this.props.searchStories} />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    searchStories: storeState.searchStatus.stories,
  };
};
export default connect(mapStateToProps, { fetchSearchResults })(
  SearchResultPage
);
