import React from 'react'
import ButtonUpdate from './ButtonUpdate'

const Card = ({quote, handleNewQuote, thumbnail}) => {
    
  return (
    <section className="container">
        <article className="card">
          <h1 className='card__title'>Facts</h1>
          <p className='card__text'>{quote.phrase}
          </p>
          <div className={`card__thumbnail ${thumbnail}`}></div>
          <p className='card__author'>Source: {quote.author}</p>
        </article>
        
        <ButtonUpdate handleNewQuote={handleNewQuote} />
      </section>
  )
}

export default Card