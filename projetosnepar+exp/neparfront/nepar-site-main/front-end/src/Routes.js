import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./Pages/Home"

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='*' exact={true}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
