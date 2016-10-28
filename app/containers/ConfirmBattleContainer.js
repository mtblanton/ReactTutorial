import React from 'react'
import {ConfirmBattle} from '../components/ConfirmBattle'
import {helpers as githubHelpers} from '../utils/githubHelpers'

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
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this));
  },
  render: function() {
    return (
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo} />
    )
  }
})
