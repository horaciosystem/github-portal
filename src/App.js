import React, { Component } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { Provider as ThemeProvider } from "reakit"
import { StoreProvider } from "common/StoreContext"
import UsersList from "pages/UsersList"
import UserDetails from "pages/UserDetails"
import theme from "theme"
import "theme/global"

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <>
              <Route exact path="/" render={() => <Redirect to="/users" />} />
              <Route path="/users" exact component={UsersList} />
              <Route path="/users/:login/details" component={UserDetails} />
            </>
          </Router>
        </ThemeProvider>
      </StoreProvider>
    )
  }
}

export default App
