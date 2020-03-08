import React from 'react'

const Person = ({name, age})=>{
    // console.log(props)
    return (
        <div>
            <h3>{name}</h3>
            <p>{age}</p>

        </div>
    )
}
export default Person