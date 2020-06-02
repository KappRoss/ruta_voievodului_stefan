import React, { Component } from 'react';
import { withRouter } from "react-router";
import { goToAnchor, removeHash } from 'react-scrollable-anchor';


class Anchor extends Component {
  componentDidMount() {
    const { history: { push }, location: { search }, id } = this.props;
    if (search === id) {
      goToAnchor(id);
      removeHash();
      push('/');
    }
  }

  componentDidUpdate(prevProps) {
    const { location: { search, pathname }, id } = this.props;
    if (search === id && search !== prevProps.location.search) {
      goToAnchor(id);
      removeHash();
    }
    if (!search && id === "top-anchor" && pathname !== prevProps.location.pathname) {
      goToAnchor("top-anchor");
      removeHash();
    }
  }

  render() {
    const { id } = this.props;
    return <span id={id} />;
  }

}

export default withRouter(Anchor);
