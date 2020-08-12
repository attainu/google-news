import React, { Component } from "react";
import NewsCard from "./NewsCard";
import WeatherCard from "./WeatherCard";
import "./css/HomeBody.css";
import { Tabs } from "@feuer/react-tabs";
import PostCardList from "./Card/PostCardList";
import { connect } from "react-redux";
import { fetchStories } from "../redux/action/storiesAction";
import SourceCardList from "./Card/SourceCardList";

class HomeBody extends Component {
    componentDidMount() {
        this.props.fetchStories('top-headlines',5);
    }
    render() {
        return (
            <section className="homeBody">
                <section className="topCards">
                    <NewsCard />
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
                    <SourceCardList stories={this.props.stories} />
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
    };
};

export default connect(mapStateToProps, { fetchStories })(HomeBody);
