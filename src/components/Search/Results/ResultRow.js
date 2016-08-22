import React, {Component} from 'react';
import {Link} from 'react-router';

import './ResultRow.scss';

export default class Results extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const result = this.props.result;
    const distance = Intl.NumberFormat([],{maximumFractionDigits: 2}).format(result.distanceFrom);
    return (
      <div className="result-row">
        <div className="result-thumb">
          {(result.media.length)
            ? <Link to={"/view/"+result.id}><img src={result.media[0].url}/></Link>
            : <img src="http://placehold.it/130x100?text=No Image"/>
          }
        </div>
        <div className="result-info">
          <div className="result-address">
            <Link to={"/view/"+result.id}>{result.address}</Link>
          </div>
          <div className="tag-line">
            {result.bedrooms} beds &middot; {result.baths + (result.halfBaths * .5)} baths &middot; {Intl.NumberFormat().format(result.livingArea)} sqft
          </div>
          <div className="result-data">
            <table className="vertical-table">
              <tbody>
                <tr><th>Price</th><td>{Intl.NumberFormat([], {style: 'currency', currency: 'USD' }).format(result.price)}</td></tr>
                <tr><th>List Date</th><td>{Intl.DateTimeFormat().format(Date.parse(result.listDate))}</td></tr>
                <tr className="distance-row"><th>Distance</th><td>{distance} miles</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="result-distance">
          <div><b>Distance</b></div>
          {distance} miles
        </div>
      </div>
    );
  }
}
