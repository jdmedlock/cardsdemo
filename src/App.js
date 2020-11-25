import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CardContainer from './components/CardContainer'
import './App.css'

const App = () => {

  const [isTasksLoaded, setIsTasksLoaded] = useState(false)
  const [tasks, setTasks] = useState()

  // Retrieve the list of default tasks on the Splash page. We are returning the
  // a promise which will be resolved when the request has successfully 
  // completed
  const fetchTasks = () => {
    return new Promise(resolve => {
      const config = {
        method: 'get',
        url: 'http://localhost:5000/splash',
        headers: { }
      };

      axios(config)
        .then((response) => {
          resolve(response.data) // Resolve when results are returned
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  // Retrieve default tasks on the Splash page from the backend server
  // if they haven't already been retrieved.
  useEffect(() => {
    if (isTasksLoaded === false) {
      fetchTasks()
        .then(response => {
          setTasks(response)
          setIsTasksLoaded(true)
        })
    }
  },[isTasksLoaded]) // Dependencies: useEffect invoked when these change

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Cards Demo</h1>
        { isTasksLoaded // Generate cards only if the BE request has completed
           ? ( <CardContainer tasks={ tasks } /> )
           : (' ')
        }
      </header>
    </div>
  );
}

export default App
