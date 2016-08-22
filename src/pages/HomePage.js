import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from 'components/Search/Search';
import SearchResults from 'components/Search/Results/Results';

import {search} from 'actions/Search/SearchActions';

export default class HomePage extends Component {
  componentWillMount() {
    const params = this.props.location.query;

    if(params.q){
      this.props.dispatch(search(params.q));
    }
  }

  render() {
    return (
      <div className="homepage-container">
        <Search {...this.props} />
        <SearchResults Search={this.props.Search} />
      </div>
    );
  }
}

HomePage.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(HomePage);
