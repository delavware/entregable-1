import React from 'react'

const ButtonUpdate = ({handleNewQuote}) => {

  return (
    <button onClick={handleNewQuote} className="card__button--update">
            <img src="/images/update-button.png" alt=""  />
    </button>
  )
}

export default ButtonUpdate