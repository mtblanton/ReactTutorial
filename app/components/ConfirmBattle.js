import React, {PropTypes} from 'react'
import {Styles} from '../styles'
import {Link} from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

export default function ConfirmBattle(props) {
return props.isLoading === true
  ? <Loading speed={800} text='Waiting'/>
  : <MainContainer>
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
    </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}
