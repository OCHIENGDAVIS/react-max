import React, {Component} from 'react';
import   './App.css';
import PersonList from './components/PersonList/PersonList'


class  App extends Component {
  state = {
    persons : [
      {name : 'mike', age : 30},
      {name : 'John', age : 40},
      {name : 'Mark', age : 20}
    ],
    showPerson : false
  }
  nameHandler = (newValue)=>{
    this.setState((prevState)=>{
      return {
        ...prevState,
        persons : prevState.persons.map(({name})=>({name : newValue}))
      }
    })
  }
  handleShowPerson = ()=>{
    this.setState((prevState)=>({showPerson : !prevState.showPerson}))
  }
  render(){
    const styles = {
      background : 'steelblue',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      color : 'white',
      border : 'none',
      marginTop : '12px',
      cursor : 'pointer'
    }
    let show = null
    if(this.state.showPerson){
      show = (
          <div>
          <h1><button onClick={this.nameHandler}> SwitchNames</button></h1>
          <PersonList persons={this.state.persons} />

        
        </div>
      )
    }
    return (
      <div className="App" >
          <h1>Hi, Iam a react app</h1>
          <p>Welcone to the party of geeks</p>
          <button onClick={this.handleShowPerson}>Toggle  person</button>
          {
            show
          }
      </div>
      
    );
    
  }
  
}

export default App;  

