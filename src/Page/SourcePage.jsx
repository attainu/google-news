import React, { Component } from "react";

import { connect } from "react-redux";
import SourceCardList from "../Component/Card/SourceCardList";
import { fetchSource } from "../redux/action/sourceAction";

class SourcePage extends Component {
  componentDidMount() {
    this.props.fetchSource();
  }

  render() {
    const loaderStyle = {
      marginLeft: "500px",
      marginTop: "300px",
    };

    return this.props.isFetching ? (
      <div className="loader" style={loaderStyle}></div>
    ) : (
      <div>
        <SourceCardList stories={this.props.source} />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    source: storeState.sourceStatus.source,
    isFetching: storeState.sourceStatus.isSourceFetching,
  };
};

export default connect(mapStateToProps, { fetchSource })(SourcePage);
