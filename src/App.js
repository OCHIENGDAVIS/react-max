import React, {Component} from 'react';
import   './App.css';
import Cockpit from './components/Cockpi/Cockpit'
import PersonList from './components/PersonList/PersonList'
import Header from './components/Header/Header'
import Img from './assets/imgs/palma.jpg'


class  App extends Component {
  state = {
    persons : [
      {id: 1,name : 'mike', age : 30},
      {id: 2, name : 'John', age : 40},
      {id: 3, name : 'Mark', age : 20}
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
  handleShowPerson = (e)=>{
	  const people = e.target.value
	  console.log(people)
	  console.log('Did anything happen here!!')
    this.setState((prevState)=>({showPerson : !prevState.showPerson}))
  }
  handleDelete = (id)=>{
	  
	  this.setState((prevState)=>{
		  return {
			...prevState,
			persons : prevState.persons.filter((el)=>el.id !== id)
		  }
	  })
  }
  handleChangeName = (name)=>{
	console.log(name)
  }
  render(){
    let show = null
    if(this.state.showPerson && this.state.persons.length > 1){
      show = (
          <div>
          <PersonList persons={this.state.persons} deletePerson={this.handleDelete} change={this.handleChangeName} />

        
        </div>
      )
	}

    return (
		
      <div className={`App`} >
		  <Header />
          <Cockpit />
          <button onClick={this.handleShowPerson} >Toggle  person</button>  <br />
		  <img src={Img} />
          {
            show
          }
      </div>
      
    );
    
  }
  
}

export default App;  

