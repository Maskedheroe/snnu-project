import { useState } from "react"
import { HomePage } from "./pages"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
