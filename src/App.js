import React, { useState } from 'react'
import {Route, useHistory} from 'react-router-dom'
import './App.css'
import AlarmManagerScreen from './components/AlarmManagerScreen'
import MessageScreen from './components/MessageScreen'


function App() {
  const history = useHistory()
  const [keyword, setKeyword] = useState('')
  const handleClick = (event) => {
    event.preventDefault()
    if(keyword.length === 4){
      history.push(`/message/${keyword}`)
    } else if(keyword=== "luonvuituoi" ){
      history.push("/qgql27cqKE4gHkMDYsob")
    } else {
      window.alert("Your opinion has been send")
      history.push("/")
    }

  }
  return (
      <div className="App grid-container">
        <header className="App-header">
          <h1 className="line-1 anim-typewriter">Share your anonymous thought for everyone to see...</h1>
        </header>
        <main className="main">
          <form onSubmit={handleClick} className="keyword-bar">
            <input 
              type="text" 
              name="keyword-input" 
              id="keyword-input" 
              onChange= {({ target }) => setKeyword(target.value)}
              placeholder="Giàu vì bạn, sang vì vợ..."
            />
            <button type="submit"> Send </button>
          </form>
          <section className="content">
            <Route path="/message/:code" component={MessageScreen} />
            <Route path="/qgql27cqKE4gHkMDYsob" exact={true} component={AlarmManagerScreen} />
          </section>
        </main>
        <footer className="footer">
          <span>Follow me in </span>
          <a href="https://www.facebook.com/CH2VOV/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/iulover99">
            <i className="fab fa-github-alt"></i>
          </a>
          <a href="https://www.instagram.com/hoang_uaena_0223/">
            <i className="fab fa-instagram"></i>
          </a>
        </footer>
      </div> 
  );
}

export default App;
