import React, { Component } from "react";

import { connect } from "react-redux";
import SourceCardList from "../Component/Card/SourceCardList";
import { fetchSource } from "../redux/action/sourceAction";

class SourcePage extends Component {
    componentDidMount() {
        this.props.fetchSource("sources");
    }

    
    
    render() {
        return this.props.isFetching ? (
            <div>Loading....</div>
        ) : (
                <div>
                    {console.log(this.props.source)}
                    <SourceCardList stories={this.props.source} />
                </div>
            );
    }
}

const mapStateToProps = (storeState) => {
    return {
        source: storeState.sourceStatus.source,
        isFetching: storeState.sourceStatus.isFetching,
    };
};

export default connect(mapStateToProps, { fetchSource })(SourcePage);
