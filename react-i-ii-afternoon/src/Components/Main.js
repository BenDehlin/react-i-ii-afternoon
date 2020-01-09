import React, {Component} from 'react'
import Body from './Body'
import Buttons from './Buttons'
import '../App.css';
import data from '../data'

class Main extends Component{
  constructor(){
    super()
    this.state = {
      data: data,
      currentValue: 0
    }
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handlePrevious(){
    let value = this.state.currentValue
    let lastIndex = this.state.data.length-1
    console.log(value)
    if(value === 0){
      value = lastIndex
    }else{
      value--
    }
    this.setState({currentValue: value})
  }
  handleNext(){
    let value = this.state.currentValue
    let lastIndex = this.state.data.length-1
    console.log(value)
    if(value === lastIndex){
      value = 0
    }
    else{
      value++
    }
    this.setState({currentValue: value})
  }
  handleEdit(){
    alert('Edit coming soon')
  }
  handleNew(){
    alert('Add New coming soon')
  }
  handleDelete(){
    let value = this.state.currentValue
    let arr = this.state.data
    arr.splice(value, 1)
    this.setState({data: arr, currentValue: 0})
  }

  render(){
    return(
      <div className="Main">
        <Body data={this.state.data[this.state.currentValue]} length={this.state.data.length} index={this.state.currentValue + 1}/>
        <Buttons previous={this.handlePrevious} delete={this.handleDelete} next={this.handleNext} new={this.handleNew} edit={this.handleEdit}/>
      </div>
    )
  }
}

export default Main