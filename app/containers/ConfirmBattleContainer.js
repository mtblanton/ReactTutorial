import React from 'react'
import {ConfirmBattle} from '../components/ConfirmBattle'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    //fetch info from github then update state
  },
  render: function() {
    return (
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo} />
    )
  }
})
