import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import db from './db/db.json'
import PulseLoader from "react-spinners/PulseLoader";



function App() {
  
  //loader 
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },1800)
  },[])

  const backgroundImage = ['bg-1','bg-2','bg-3','bg-4']
  //Obtain Random Elements
  //Receive the json array from db with 'listItems'
  const getRandomItem = (listItems) => {
    // .random() ranges between 0 and 0.99
    // .floor() rounds down a given number
    const randomIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randomIndex]
  }

  const [quote, setQuote] = useState(getRandomItem(db))
  const [background, setBackground] = useState(getRandomItem(backgroundImage))

  const handleNewQuote = () => {
    setQuote(getRandomItem(db))
    setBackground(getRandomItem(backgroundImage))
  }

  return (
    <div className={`App ${background}`}>
      {
        loading? 
        <PulseLoader
        color={'#5334E5'}
        loading={loading}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        :
        <div className='main__container'>
          <h1 className='title'>The universe</h1>
          <Card quote={quote} handleNewQuote={handleNewQuote} thumbnail={background} />
          <footer className='card__footer'>Developed by @jmdelav</footer>
        </div>
      }
      
    </div>
  )
}

export default App
