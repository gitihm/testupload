
import React, { Component } from 'react';
import firebase from './components/firebase'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route ,BrowerHistory} from 'react-router-dom'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import history from './components/history';
class App extends Component{
  state = {
    firebaseInitialized : false
  }
  componentDidMount =()=> {
    firebase.isInitialized().then(val => {
      this.setState({
        firebaseInitialized : val
      })
		})
  }
    render() {
      
      return this.state.firebaseInitialized !== false ? (
        <MuiThemeProvider >
          <CssBaseline />
          <Router history={history}>
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/dashboard"  component={Dashboard} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      ) : <div id="loader"><CircularProgress /></div>
    }
}

export default App;