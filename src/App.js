import React, {Component} from 'react';

// Components
import CardList from './components/card-list/card-list-component'
import SearchBox from './components/search-box/search-box-component'

import './App.css';
import Resources from './Resources/resources.json'

class App extends Component {

  constructor() {
    super()

    this.state = {
      devResources: Resources,
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(newResource => this.setState({devResources: newResource}))
  // }

  //lexical scoping no need to bind
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render (){

    const {devResources, searchField} = this.state
    const filteredResources = devResources.filter(function(resource){
      return resource.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (

      <div className="App">
      <h1>Resources for coding and stuff</h1>
        <SearchBox placeholder='Search Resources' handleChange={this.handleChange}/>
        <CardList resources={filteredResources}>
        </CardList>
      </div>
    
    )

  }
 
}

export default App;
