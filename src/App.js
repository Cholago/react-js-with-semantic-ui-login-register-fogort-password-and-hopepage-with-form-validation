import React from "react"
import Login from './Components/Forms/Login'
import Signup from './Components/Forms/Signup'
import Forgotpassword from './Components/Forms/Forgotpassword'
import MainPage from './Views/Mainpage'
import Test from './Components/Forms/Test'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotpassword" component={Forgotpassword} />
        <Route path="/test" component={Test} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
}
export default App
