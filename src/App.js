import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CardContainer from './components/CardContainer'
import './App.css'

const App = () => {

  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [tasks, setTasks] = useState()

  const fetchTasks = () => {
    return new Promise(resolve => {
      const config = {
        method: 'get',
        url: 'http://localhost:5000/splash',
        headers: { }
      };

      axios(config)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  useEffect(() => {
    if (isDataLoaded === false) {
      fetchTasks()
        .then(response => {
          setTasks(response)
          setIsDataLoaded(true)
        })
    }
  },[isDataLoaded, setIsDataLoaded])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Cards Demo</h1>
        { isDataLoaded
           ? ( <CardContainer tasks={ tasks } /> )
           : (' ')
        }
      </header>
    </div>
  );
}

export default App
