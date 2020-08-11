import React, { Component } from "react";
import { connect } from "react-redux";
import NewsCardContainer from "../Component/NewsCardContainer/NewsCardContainer";

import { fetchCategoryStories } from "../redux/action/categoryActions";

class CategoryCountryPage extends Component {
  componentDidMount() {
    this.props.fetchCategoryStories(this.props.match.params.categoryName);
  }
  render() {
    return (
      <div>
        <NewsCardContainer stories={this.props.categoryStories} />
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
