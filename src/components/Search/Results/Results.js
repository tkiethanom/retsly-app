import React, {Component} from 'react';
import ResultRow from './ResultRow';

import './Results.scss';

export default class Results extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){

  }

  render(){
    const results = this.props.Search.results;
    const error = this.props.Search.error;

    return (
      <div className="results-container">
        {(results.length) ? <h2>Search Results</h2> : null }
        {(results.length) ?
          results.map(function(result, i){
            return <ResultRow result={result} key={i} />
          })
          : null
        }
        {(error) ?
          <div className="results-error">{error}</div>
        : null}
      </div>
    );
  }
}
