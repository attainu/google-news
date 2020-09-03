import React, { Component } from "react";
import { Link } from "react-router-dom";
import WeatherCard from "./WeatherCard/WeatherCard";
import "./css/HomeBody.css";
import { Tabs } from "@feuer/react-tabs";
import PostCardList from "./Card/PostCardList";
import { connect } from "react-redux";
import { fetchStories } from "../redux/action/storiesAction";
import { fetchCategoryStories } from "../redux/action/categoryActions";
import { fetchWorldNews } from "../redux/action/worldNewsAction";
import SwipeCard from "./SwipeCard/SwipeCard";
import { fetchSource } from "../redux/action/sourceAction";
import SourceCardList from "./Card/SourceCardList";
class HomeBody extends Component {
  componentDidMount() {
    this.props.fetchStories("top-headlines", 1, 5);
    this.props.fetchCategoryStories("business", 1, 5);
    this.props.fetchWorldNews(1, 5);
    this.props.fetchSource("in");
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
              <>
                <PostCardList stories={this.props.categoryStories} />
                <Link to="/categories/business">
                  <button style={{ marginLeft: "550px" }}>View More</button>
                </Link>
              </>
            )}
          </Tabs.Tab>
          <Tabs.Tab id="source" title="Source">
            {this.props.isSourceFetching ? (
              <div className="loader" style={loaderStyle}></div>
            ) : (
              <>
                <SourceCardList stories={this.props.sources} />
                <Link to="/source">
                  <button style={{ marginLeft: "550px" }}>View More</button>
                </Link>
              </>
            )}
          </Tabs.Tab>
          <Tabs.Tab id="world" title="World">
            {this.props.isworldNewsFetching ? (
              <div className="loader" style={loaderStyle}></div>
            ) : (
              <>
                <PostCardList stories={this.props.worldstories} />
                <Link to="/worldNews">
                  <button style={{ marginLeft: "550px" }}>View More</button>
                </Link>
              </>
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

    worldstories: storeState.worldNewsStatus.stories,
    isworldNewsFetching: storeState.worldNewsStatus.isFetching,

    sources: storeState.sourceStatus.source,
    isSourceFetching: storeState.sourceStatus.isSourceFetching,
  };
};

export default connect(mapStateToProps, {
  fetchStories,
  fetchCategoryStories,
  fetchWorldNews,
  fetchSource,
})(HomeBody);
