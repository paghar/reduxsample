import React, { Component } from "react"
import Header from "../components/Header"
import CardGridCo from "../containers/CardGridCo"
import { MadeBy } from "./App.style"
import { Provider } from "react-redux"

import store from "../store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header></Header>
          <CardGridCo></CardGridCo>
          <MadeBy>Made with ♡ Fatemeh Paghar</MadeBy>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App
