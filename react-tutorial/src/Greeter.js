import React from 'react';

function Greeter({name, age, excitement = 3}){
    return(
        <div>
            <h1>Hi there, {name}{"!".repeat(excitement)}</h1>
            <p>You are {age} years old!</p>
        </div>
    )
}

export default Greeter;