import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Components/Users";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Post from "./Components/Post";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Route exact path="/" component={Users} />
        <Route path="/profile/:id" component={Profile} />
        <Route path='/posts/:id' component={Post} />
      </BrowserRouter>
    </div>
  );
}

export default App;
