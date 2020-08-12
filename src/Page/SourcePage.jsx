import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchStories } from "../redux/action/storiesAction";
import SourceCardList from "../Component/Card/SourceCardList";

class SourcePage extends Component {
    componentDidMount() {
        this.props.fetchStories("sources");
    }

    render() {
        return this.props.isFetching ? (
            <div>Loading....</div>
        ) : (
                <div>
                    <SourceCardList stories={this.props.stories} />
                </div>
            );
    }
}

const mapStateToProps = (storeState) => {
    return {
        stories: storeState.storiesStatus.stories,
        isFetching: storeState.storiesStatus.isFetching,
    };
};

export default connect(mapStateToProps, { fetchStories })(SourcePage);
