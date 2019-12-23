import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


function App() {
    const isAuthenticated = false;
  return (
	  <Router>
		  <Switch>
			  <Route exact path='/dashboard' component={Dashboard} />
			  <Route exact path='/register' component={Register} />
			  <Route exact path='/login' component={Login} />
              <Redirect exact path="/*" to={isAuthenticated ? '/dashboard' : '/login'}/>
          </Switch>
      </Router>
  );
}

export default App;
