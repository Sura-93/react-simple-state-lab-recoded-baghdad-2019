<<<<<<< HEAD
import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }

=======
import React from 'react'

export default class Cell extends React.Component{

    constructor(props){
        super(props)
        this.state={
            color:props.value
        }
    }

    changeColor=()=> {
      this.setState({color:'#333'})}


    render(){
         return(
             <div className="cell" style={{backgroundColor:this.state.color}} onClick={this.changeColor}>

             </div>
         )
    }


>>>>>>> a7141d6b49f34573fe6e16944e6217cca25bcb58
}
