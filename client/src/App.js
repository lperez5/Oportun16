import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar} from './components/Navbar/index.jsx'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      posts: [],
    };
    this.setStateHandler = this.setStateHandler.bind(this);
  }

  async componentDidMount() {
    const URL = '/api';
    const response = await fetch(URL);
    const posts = await response.json();
    posts.reverse();
    this.setState({posts});
  };

  setStateHandler(posts){
    this.setState({posts});
  }

  render() {

    return(
          <div className="App">
            <Navbar dbCacheArray = {this.state.posts} setdbCacheArray = {this.setStateHandler} />
          </div>
    );
  }
}

export default App;
