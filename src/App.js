import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUser } from "./redux/user"
import Stats from "./components/stats/Stats"
import Posts from "./pages/posts/Posts"
import MyComments from "./pages/my_comments/MyComments"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import './App.css';


function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
}, [dispatch])

  return (
    <div className="App">
        <Router>

          <nav style={{textAlign: "center"}}>
            <ul>
              <li>
                <Link to="/">Posts</Link>
              </li>
              <li>
                <Link to="/my-comments">My Comments</Link>
              </li>
            </ul>
          </nav>

          <Stats />

          <Switch>
            <Route exact path="/">
                <Posts />
            </Route>
            <Route path="/my-comments">
                <MyComments />
            </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App;
