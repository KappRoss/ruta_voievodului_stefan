import React, { Component } from 'react';
import { withRouter } from "react-router";
import { goToAnchor, removeHash } from 'react-scrollable-anchor';


class Anchor extends Component {
  componentDidUpdate(prevProps) {
    const { location: { search } } = this.props;
    if (search !== prevProps.location.search && search === "?pos=rom") {
      goToAnchor("pos=rom")
      removeHash()
    }
  }

  render() {
    return <span id="pos=rom" />;
  }

}

export default withRouter(Anchor);
