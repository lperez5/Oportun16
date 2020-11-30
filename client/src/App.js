import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
import {Navbar} from './components/Navbar/index.jsx'
import {handleCache} from './components/Navbar/index.jsx'

class App extends React.Component {

  state = {
    title: '',
    body: '',
    posts: []
  };

  async componentDidMount() {
    const URL = '/api';
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({posts: data});
    //console.log(data[0])
    handleCache(data)
    console.log('Data received')
  };
  // getBlogPost = () => {
  //   axios.get('/api')
  //     .then((response) => {
  //       const data = response.data;
  //       //this.setState({ posts: data });
  //       handleCache(data[0]);
  //       console.log(data[0])
  //       console.log('Data has been received!!');
  //     })
  //     .catch(() => {
  //       alert('Error retrieving data!!!');
  //     });
  // }

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
          <div className="App">
            <Navbar />
          </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

export default App;
