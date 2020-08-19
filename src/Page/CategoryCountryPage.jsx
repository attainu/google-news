import React, { Component } from "react";
import { connect } from "react-redux";

import PostCardList from "../Component/Card/PostCardList";
import { fetchCategoryStories } from "../redux/action/categoryActions";
import Pagination from "../Component/Pagination";
class CategoryCountryPage extends Component {
  state = {
    currentpageNumber: 1,
    postsPerPage: 5,
  };

  componentDidMount() {
    this.props.fetchCategoryStories(this.props.match.params.categoryName);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.categoryName !==
      prevProps.match.params.categoryName
    ) {
      this.props.fetchCategoryStories(this.props.match.params.categoryName);
    }
  }

  paginate = (pageNumber) => {
    this.setState({ currentpageNumber: pageNumber });
  };

  render() {
    const indexOfLastStory =
      this.state.currentpageNumber * this.state.postsPerPage;
    const indexOfFirstStory = indexOfLastStory - this.state.postsPerPage;
    const currentStories = this.props.categoryStories.slice(
      indexOfFirstStory,
      indexOfLastStory
    );
    return (
      <div>
        <PostCardList stories={currentStories} />
        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.props.categoryStories.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    categoryStories: storeState.categoryPageStatus.stories,
  };
};

export default connect(mapStateToProps, { fetchCategoryStories })(
  CategoryCountryPage
);
