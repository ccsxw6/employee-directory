import React from 'react';
import './App.css';
import axios from "axios";
import Heading from './components/Heading';
import Navbar from './components/Navbar';


class App extends React.Component {
  // setting original state to an empty employees array
  state = {
    employees: [],
  };

  // setting original state to everything from API
  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=us`)
        .then(res => {
          this.setState({ 
            employees: res.data.results 
          });
        });
  }


  render() {
    return (
      <div className="App">
        <Heading />
        {this.state.employees.length > 0 &&
        <Navbar employees={this.state.employees}/>
  }
      </div>
    );
  }
}

export default App;
