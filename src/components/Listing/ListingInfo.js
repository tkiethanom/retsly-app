import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ListingInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let output =  [];
    const context = this;

    this.props.data.forEach(function(table, i){
      output.push(
        <div key={i}>
          <h3 className="section-title">{table.title}</h3>
          <table className="vertical-table">
            <tbody>
              {table.data.map(function(row, j){
                return <tr key={j}><th>{row.name}</th><td>{context.outputValue(row)}</td></tr>
              })}
            </tbody>
          </table>
        </div>
      );
    });

    return (
      <div className="listing-info">
        {output}
      </div>
    )
  }

  outputValue(row){
    let output = '';

    if(row.type === 'string'){
      if(row.value){
        output = row.value;
      }
    }
    else if(row.type === 'currency'){
      if(row.value !== null){
        output = Intl.NumberFormat([], {style: 'currency', currency: 'USD' }).format(row.value);
      }
    }
    else if(row.type === 'number'){
      if(row.value !== null){
        output = Intl.NumberFormat().format(row.value);

        if(row.suffix){
          output += row.suffix;
        }
      }
    }
    else if(row.type === 'date'){
      if(row.value){
        output = Intl.DateTimeFormat().format(Date.parse(row.value));
      }
      else{
        output = 'N/A'
      }
    }
    else if(row.type === 'bool'){
      output = (row.value) ? 'Yes' : 'No';
    }
    else if(row.type ===  'list'){
      output = '';
      if(Array.isArray(row.value) ){
        if(row.value.length > 1){
          output = <ul>
            {row.value.map(function(item, i){
              return <li key={i}>{item}</li>
            })}
          </ul>;
        }
        else if(row.value.length === 1){
          output = row.value[0];
        }
        else{
          output = 'N/A';
        }
      }
      else{
        output = 'N/A';
      }
    }

    return output;
  }
}
