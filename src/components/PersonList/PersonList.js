import React from 'react'
import './PersonList.css'
import Person from '../Person/Person'

const  PersonList = (props)=>{
    const nameSwitch = ()=>{
        props.sitchNames("New Value")
    }
    return (
        <div className="Person">
            {
                props.persons.map((person, key)=>{
                    return <Person {...person} key={key} deletePerson={props.deletePerson} change={props.change}/>
                })
            }
            
        </div>
    )
}
export default PersonList