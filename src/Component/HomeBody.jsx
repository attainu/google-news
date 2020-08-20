import React, { Component } from "react";
import { Link } from "react-router-dom";
import WeatherCard from "./WeatherCard/WeatherCard";
import "./css/HomeBody.css";
import { Tabs } from "@feuer/react-tabs";
import PostCardList from "./Card/PostCardList";
import { connect } from "react-redux";
import { fetchStories } from "../redux/action/storiesAction";
import { fetchCategoryStories } from "../redux/action/categoryActions";
import SourceCardList from "./Card/SourceCardList";
import SwipeCard from "./SwipeCard/SwipeCard";

class HomeBody extends Component {
  componentDidMount() {
    this.props.fetchStories("top-headlines", 1, 5);
    this.props.fetchCategoryStories("business", 1, 5);//have to pass 1st parameter dynamically according to tab title so that it will fetch data respective to tab title name
  }
  handleTabClick = (e) => {};
  render() {
    const loaderStyle = {
      marginLeft: "600px",
      marginTop: "200px",
    };

    return (
      <section className="homeBody">
        <section className="topCards">
          <SwipeCard />
          <WeatherCard />
        </section>
        <Tabs
          tabsProps={{
            style: {
              textAlign: "left",
            },
          }}
          activeTab={{
            id: "topStories",
          }}
        >
          <Tabs.Tab id="topStories" title="Top Stories">
            {this.props.isFetching ? (
              <div className="loader" style={loaderStyle}></div>
            ) : (
              <>
                <PostCardList stories={this.props.stories} />
                <Link to="/topStories">
                  <button style={{ marginLeft: "550px" }}>View More</button>
                </Link>
              </>
            )}
          </Tabs.Tab>

          <Tabs.Tab id="business" title="Business">
            {this.props.isCategoryFetching ? (
              <div className="loader" style={loaderStyle}></div>
            ) : (
              <PostCardList stories={this.props.categoryStories} />
            )}
          </Tabs.Tab>
          <Tabs.Tab id="technology" title="Technology">
            {this.props.isCategoryFetching ? (
              <div className="loader" style={loaderStyle}></div>
            ) : (
              <PostCardList stories={this.props.categoryStories} />
            )}
          </Tabs.Tab>
          <Tabs.Tab id="entertainment" title="Entertainment">
            {this.props.isCategoryFetching ? (
              <div className="loader" style={loaderStyle}></div>
            ) : (
              <PostCardList stories={this.props.categoryStories} />
            )}
          </Tabs.Tab>
        </Tabs>
      </section>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    stories: storeState.storiesStatus.stories,
    isFetching: storeState.storiesStatus.isFetching,

    categoryStories: storeState.categoryPageStatus.stories,
    isCategoryFetching: storeState.categoryPageStatus.isFetching,
  };
};

export default connect(mapStateToProps, { fetchStories, fetchCategoryStories })(
  HomeBody
);

