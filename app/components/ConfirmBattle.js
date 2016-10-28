import React from 'react'

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
    return props.isLoading === true
      ? <p>LOADING!</p>
      : <div> CONFIRM BATTLE: {puke(props)} </div>
}

export {ConfirmBattle};
