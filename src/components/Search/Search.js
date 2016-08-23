import React, {Component} from 'react';
import {search} from 'actions/Search/SearchActions';

import './Search.scss';

export default class Search extends Component {
  constructor(props){
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount(){

  }

  render(){
    const params = this.props.location.query;
    let q = '';
    if(params.q){
      q = params.q;
    }

    return (
      <div className="search-container">
        <p>Type in an address or city to search for listings nearby. Try "624 K Street, Los Banos, CA" or "San Francisco".</p>
        <form onSubmit={this.handleSearch}>
          <input className="input text" type="text" name="q" placeholder="Search" ref="search" defaultValue={q}/>
          {
            (this.props.Search.isSearching) ?
              <div className="loader"></div>
              : null
          }
          <button className="btn btn-lg">Submit</button>
        </form>
      </div>
    );
  }

  handleSearch(e){
    e.preventDefault();

    const val = this.refs.search.value;

    if(val){
      this.props.dispatch(search(val));

      this.context.router.push('/?q='+val);
    }
  }
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {
    Search: state.Search
  };
}

Search.contextTypes = {
  router: React.PropTypes.object
};