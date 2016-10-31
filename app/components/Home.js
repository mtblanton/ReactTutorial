import React from 'react'
import {Styles} from '../styles'
import {Link} from 'react-router'
import MainContainer from '../components/MainContainer'


export default React.createClass({
  render: function() {
    return (
      <MainContainer>
          <h1>Github Battle</h1>
          <p className='lead'>What even is a jQuery?</p>
          <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-success'>Get Started</button>
          </Link>
      </MainContainer>
    )
  }
});
