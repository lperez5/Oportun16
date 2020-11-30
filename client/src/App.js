import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar} from './components/Navbar/index.jsx'

var DBarray = [];
class App extends React.Component {

  state = {
    title: '',
    body: '',
    posts: []
  };

  async componentDidMount() {
    const URL = '/api';
    const response = await fetch(URL);
    DBarray = await response.json();
    this.setState({posts: DBarray});
    //console.log(DBarray[0])
    console.log('Data received')
  };
  render() {

    console.log('State: ', this.state);
    //JSX
    return(
          <div className="App">
            <Navbar dbArray = {DBarray} />
          </div>
    );
  }
}

export default App;
