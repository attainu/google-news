import React, { Component } from "react";
import { connect } from "react-redux";

import PostCardList from "../Component/Card/PostCardList";
import { fetchCategoryStories } from "../redux/action/categoryActions";
class CategoryCountryPage extends Component {
  componentDidMount() {
    this.props.fetchCategoryStories(this.props.match.params.categoryName);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.categoryName !== prevProps.match.params.categoryName) {
      this.props.fetchCategoryStories(this.props.match.params.categoryName)
    }
  }
  render() {
    return (
      <div>
        <PostCardList stories={this.props.categoryStories} />
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
