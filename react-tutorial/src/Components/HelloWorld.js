import React from 'react'

//Example of creating a UI element using the component class
//Older way of using React, soon to be deprecated
class HelloWorld extends React.Component{
    render(){
        return(
            <h1>Hello, {this.props.name}.</h1>
        )
    }
}

export default HelloWorld;