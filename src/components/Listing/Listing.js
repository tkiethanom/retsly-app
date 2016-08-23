import React, {Component} from 'react';
import {Link} from 'react-router';

import ListingInfo from './ListingInfo';

import './Listing.scss';

export default class Listing extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const data = this.props.Listing.data;

    const media = this.generateMedia(data.media);

    return (
      <div className="listing-container">
        <Link to="/" className="close-button">
          <span></span>
          <span></span>
        </Link>
        <div className="title">{data.address}</div>

        <div className="tag-line">
          {data.bedrooms} beds &middot; {data.baths + (data.halfBaths * .5)} baths &middot; {Intl.NumberFormat().format(data.livingArea)} sqft
        </div>
        <div className="price">
          {Intl.NumberFormat([], {style: 'currency', currency: 'USD' }).format(data.price)}
        </div>
        {media}

        <ListingInfo data={
          [
            {
              title: 'Location Info',
              data: [
                {name: 'Street Name', value: data.streetName, type: 'string'},
                {name: 'Street No.', value: data.streetNumber, type: 'string'},
                {name: 'City', value: data.city, type: 'string'},
                {name: 'State', value: data.state, type: 'string'},
                {name: 'Zip', value: data.zipCode, type: 'string'},
                {name: 'County', value: data.county, type: 'string'},
                {name: 'Country', value: data.country, type: 'string'},
                {name: 'Subdivision', value: data.subdivision, type: 'string'},
                {name: 'Coordinates', value: (data.coordinates[1] + ', ' + data.coordinates[0]), type: 'string'}
              ]
            },
            {
              title: 'Sale Info',
              data: [
                {name: 'Current Price', value: data.price, type: 'currency'},
                {name: 'Previous Price', value: data.previousPrice, type: 'currency'},
                {name: 'Original Price', value: data.originalPrice, type: 'currency'},
                {name: 'Close Price', value: data.closePrice, type: 'currency'},
                {name: 'Contingency', value: data.contingency, type: 'string'},
                {name: 'Terms of Sale', value: data.termsOfSale, type: 'list'},
                {name: 'Disclosures', value: data.termsOfSale, type: 'list'},
              ]
            },
            {
              title: 'Listing Date Info',
              data: [
                {name: 'List Date', value: data.listDate, type: 'date'},
                {name: 'Last Modified', value: data.lastModified, type: 'date'},
                {name: 'Cancellation Date', value: data.cancellationDate, type: 'date'},
                {name: 'Expiration Date', value: data.expirationDate, type: 'date'},
                {name: 'Date Sold', value: data.dateSold, type: 'date'},
                {name: 'Status Change', value: data.statusChange, type: 'date'},
                {name: 'Days On Market', value: data.daysOnMarket, type: 'number'},
              ]
            },

            {
              title: 'Property Info',
              data: [
                {name: 'Beds', value: data.bedrooms, type: 'number'},
                {name: 'Baths', value: data.baths, type: 'number'},
                {name: 'Stories', value: data.halfBaths, type: 'number'},
                {name: 'Half Baths', value: data.halfBaths, type: 'number'},
                {name: 'Living Area', value: data.livingArea, type: 'number', suffix: ' sqft.'},
                {name: 'Above Grade Finished Area', value: data.aboveGradeFinishedArea, type: 'number', suffix: ' sqft.'},
                {name: 'Below Grade Finished Area', value: data.belowGradeFinishedArea, type: 'number', suffix: ' sqft.'},
                {name: 'Zoning', value: data.zoning, type: 'string'},
                {name: 'Zoning Description', value: data.zoningDescription, type: 'string'},
                {name: 'Acres', value: data.acres, type: 'number'},
                {name: 'Frontage Length', value: data.frontageLength, type: 'number', suffix: ' ft.'},
              ]
            },
            {
              title: 'Features',
              data: [
                {name: 'View', value: data.view, type:'list'},
                {name: 'Waterfront', value: data.waterfront, type:'bool'},
                {name: 'Fireplaces', value: data.fireplaces, type:'number'},
                {name: 'Fireplace Features', value: data.fireplaceFeatures, type:'list'},
                {name: 'Garage Spaces', value: data.garageSpaces, type:'number'},
                {name: 'Carport Spaces', value: data.carportSpaces, type:'number'},
                {name: 'Pool', value: data.pool, type:'bool'},
                {name: 'Private Pool', value: data.poolPrivate, type:'bool'},
                {name: 'Pool Features', value: data.poolFeatures, type:'list'},
                {name: 'Exterior Features', value: data.exteriorFeatures, type:'list'},
                {name: 'Telephone Service', value: data.telephoneService, type:'list'},
                {name: 'Appliances', value: data.appliances, type:'list'},
                {name: 'Laundry', value: data.laundry, type:'list'},
                {name: 'Gas', value: data.gas, type:'list'},
                {name: 'Heating', value: data.heating, type:'list'},
                {name: 'Cooling', value: data.cooling, type:'list'},
                {name: 'Water Source', value: data.waterSource, type:'list'},
                {name: 'Sewer', value: data.sewer, type:'list'},
                {name: 'Accessibility Features', value: data.accessibilityFeatures, type:'list'},
                {name: 'Additional Parcels', value: data.additionalParcels, type:'bool'},
              ]
            },
            {
              title: 'Construction Info',
              data: [
                {name: 'Year Built', value: data.yearBuilt, type: 'string'},
                {name: 'Year Built Details', value: data.yearBuiltDetails, type: 'string'},
                {name: 'Stories', value: data.stories, type: 'number'},
                {name: 'Stories Total', value: data.storiesTotal, type: 'number'},
                {name: 'Rooms Total', value: data.roomsTotal, type: 'number'},
                {name: 'Roof Type', value: data.roof, type: 'string'},
                {name: 'Flooring', value: data.flooring, type: 'list'},
                {name: 'Construction Materials', value: data.constructionMaterials, type: 'list'},
                {name: 'Foundation Details', value: data.foundationDetails, type: 'list'},
                {name: 'Road Surface', value: data.roadSurface, type: 'list'},
              ]
            },

            {
              title: 'Type Info',
              data: [
                {name: 'Type', value: data.type, type: 'string'},
                {name: 'Subtype', value: data.subtype, type: 'string'},
                {name: 'Occupant Type', value: data.occupantType, type: 'string'},
              ]
            },
            {
              title: 'Other',
              data: [
                {name: 'Ownership', value: data.ownership, type: 'string'},
                {name: 'Possession', value: data.possession, type: 'string'},
                {name: 'Financial Data Source', value: data.financialDataSource, type: 'string'},
                {name: 'Public Remarks', value: data.publicRemarks, type: 'string'},
                {name: 'Private Remarks', value: data.privateRemarks, type: 'string'},
              ]
            },
            {
              title: 'Tax Info',
              data: [
                {name: 'Tax Assessed Value', value: data.taxAssessedValue, type: 'currency'},
                {name: 'Tax Annual', value: data.taxAnnual, type: 'currency'},
                {name: 'Tax Year', value: data.taxYear, type: 'string'},
                {name: 'Tax Status', value: data.taxStatus, type: 'list'},
              ]
            }
          ]
        }/>

        <h3 className="section-title">Listing Office</h3>
        {(!this.props.Office.isLoading &&  this.props.Office.data) ?
          <ListingInfo data={[
            {
              title: null,
              data: [
                {name: 'Name', value: this.props.Office.data.name, type: 'string'},
                {name: 'Address', value: this.props.Office.data.address +', '+ this.props.Office.data.city + ', ' + this.props.Office.data.state  + ' ' + this.props.Office.data.zipCode, type: 'string'},
                {name: 'Phone', value:  this.props.Office.data.phone, type: 'string'},
                {name: 'Fax', value:  this.props.Office.data.fax, type: 'string'},
              ]
            }
          ]} />
          : null
        }
        {(this.props.Office.isLoading) ?
          <div className="loader" ></div>
          : null
        }
        {(this.props.Office.error) ?
          <div className="office-error" >{this.props.Office.error}</div>
          : null
        }

        <h3 className="section-title">Listing Agent</h3>
        {(!this.props.Agent.isLoading &&  this.props.Agent.data) ?
          <ListingInfo data={[
            {
              title: null,
              data: [
                {name: 'Name', value: this.props.Agent.data.fullName, type: 'string'},
                {name: 'Home Phone', value: this.props.Agent.data.homePhone, type: 'string'},
                {name: 'Cell Phone', value:  this.props.Agent.data.cellPhone, type: 'string'},
                {name: 'Office Phone', value:  this.props.Agent.data.officePhone, type: 'string'},
              ]
            }
          ]} />
          : null
        }
        {(this.props.Agent.isLoading) ?
          <div className="loader" ></div>
          : null
        }
        {(this.props.Agent.error) ?
          <div className="office-error" >{this.props.Agent.error}</div>
          : null
        }

      </div>
    );
  }

  generateMedia(media){
    let mediaContainer;

    if(media.length){
      mediaContainer =
        <div className="media-container">
          {media.map(function(img, i){
            return <a href={img.url} target="_blank" key={i}><img className="media" src={img.url} /></a>
          })}
        </div>;
    }

    return mediaContainer;
  }
}
