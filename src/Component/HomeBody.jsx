import React, { Component } from "react";
import WeatherCard from "./WeatherCard/WeatherCard";
import "./css/HomeBody.css";
import { Tabs } from "@feuer/react-tabs";
import PostCardList from "./Card/PostCardList";
import { connect } from "react-redux";
import { fetchStories } from "../redux/action/storiesAction";
import { fetchSource } from "../redux/action/sourceAction";
import SourceCardList from "./Card/SourceCardList";
import SwipeCard from './SwipeCard/SwipeCard'

class HomeBody extends Component {
  componentDidMount() {
    this.props.fetchStories("top-headlines",1,5);
    this.props.fetchSource();
  }
  render() {
    return (
      <section className="homeBody">
        <section className="topCards">
          <SwipeCard/>
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
            <PostCardList stories={this.props.stories} />
          </Tabs.Tab>
          <Tabs.Tab id="source" title="Source">
            <SourceCardList stories={this.props.source} />
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

    source: storeState.sourceStatus.source,
  };
};

export default connect(mapStateToProps, { fetchStories, fetchSource })(
  HomeBody
);