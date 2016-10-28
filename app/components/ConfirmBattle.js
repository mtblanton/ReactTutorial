import React, {PropTypes} from 'react'
import {Styles} from '../styles'
import {Link} from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
return props.isLoading === true
  ? <p>LOADING!</p>
  : <div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-8 col-sm-offset-2' style={Styles.space}>
        <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle} style={Styles.space}>Initiate Battle!</button>
      </div>
      <div className='col-sm-12' style={Styles.space}>
        <Link to='playerOne'>
          <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
        </Link>
      </div>
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export {ConfirmBattle};
