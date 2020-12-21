import React, { useState } from 'react'
import {Route, useHistory} from 'react-router-dom'
import './App.css'
import AlarmManagerScreen from './components/AlarmManagerScreen'
import MessageScreen from './components/MessageScreen'
import UselessScreen from './components/UselessScreen'


function App() {
  const history = useHistory()
  const [keyword, setKeyword] = useState('')
  const handleClick = (event) => {
    event.preventDefault()
    if(keyword.length === 4){
      history.push(`/message/${keyword}`)
    } else if(keyword=== "luonvuituoi" ){
      history.push("/qgql27cqKE4gHkMDYsob")
    } else if(keyword=== "quanbidien"){
      history.push("/FlbSpuouohaaylukvp")
    } else {
      window.alert("Our services is down at the moment due to some unexpected issues, please try again later...")
      history.push("/")
    }

  }
  return (
      <div className="App grid-container">
        <header className="App-header">
          <h1 className="line-1 anim-typewriter">Shorten your url to become a lucky person and gain our prize!</h1>
        </header>
        <main className="main">
          <form onSubmit={handleClick} className="keyword-bar" autoComplete="off">
            <input 
              type="text" 
              name="keyword-input" 
              id="keyword-input" 
              onChange= {({ target }) => setKeyword(target.value)}
              placeholder="Put your link here..."
            />
            <button type="submit"> Confirm </button>
          </form>
          <section className="content">
            <Route path="/message/:code" component={MessageScreen} />
            <Route path="/qgql27cqKE4gHkMDYsob" exact={true} component={AlarmManagerScreen} />
            <Route path="/FlbSpuouohaaylukvp" exact={true} component={UselessScreen} />   {/* shift 7 */}
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
