import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadListing} from 'actions/Listing/ListingActions';
import {loadOffice} from 'actions/Listing/OfficeActions';
import {loadAgent} from 'actions/Listing/AgentActions';

import Listing from 'components/Listing/Listing';

import '../sass/View.scss';

export default class View extends Component {
  componentWillMount() {
    const id = this.props.params.id;

    this.fetchListing(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.fetchListing(nextProps.params.id);
    }
  }

  render() {

    return (
      <div className="view-container">
        {(this.props.Listing.data) ? <Listing {...this.props} /> : null }
        {(this.props.Listing.error) ? <div className="listing-error">{this.props.Listing.error}</div> : null }
        {(this.props.Listing.isLoading) ? <div className="loader"></div> : null }
      </div>
    );
  }

  fetchListing(id){
    const context = this;

    this.props.dispatch(loadListing(id)).then(function(json){
      if(json){
        if(json.bundle.office){
          context.props.dispatch(loadOffice(json.bundle.office));
        }
        if(json.bundle.agent){
          context.props.dispatch(loadAgent(json.bundle.agent));
        }
      }
    });
  }
}

View.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {
    Listing: state.Listing,
    Office: state.Office,
    Agent: state.Agent,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(View);
