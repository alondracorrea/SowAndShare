import React, { Component } from 'react'
import './PeopleImage.css'
import { Link } from 'react-router-dom';

class PeopleImage extends Component {
  render() {
    return (
      <div className ='people-img'>
        <div className ='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            <Link to="/map">
            <button className='map-btn'>Map   
            </button>
            </Link>
        </div>
      </div>
    )
  }
}

const mapButton = () => {
  

}

export default PeopleImage
