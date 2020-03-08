import React from 'react'

const Person = ({id, name, age, deletePerson, change})=>{
	const handleDel = ()=>{
		deletePerson(id)
	}
	const changeHandler = (e)=>{
		const name = e.target.value
		return name
	}
	const handleChangeName = ()=>{
		const name = this.changeHandler()
		change(name)
	}
	
	
    return (
        <div>
            <h3>{name}</h3>
            <p>{age}</p>
			<input type='text' placeholder='Change Name' onChange={changeHandler}/>
			<button onClick={()=>handleChangeName()}>Change Name</button>
			<button onClick={()=>handleDel()}>Delete</button>

        </div>
    )
}
export default Person