import React from 'react'

function ConfirmBattle(props) {
    return props.isLoading === true
      ? <p>LOADING!</p>
      : <p> CONFIRM BATTLE! </p>
}

export {ConfirmBattle};
