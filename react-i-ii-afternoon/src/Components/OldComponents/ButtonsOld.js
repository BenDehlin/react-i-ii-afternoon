import React, {Component} from 'react'
import '../App.css';


class Buttons extends Component{
  constructor(){
    super()
    this.state = {}
    // this.handlePrevious = this.handlePrevious.bind(this)
    // this.handleNext = this.handleNext.bind(this)
  }

  handlePrevious(){
    this.props.previous()
  }
  handleNext(){
    this.props.next()
  }
  handleEdit(){
    this.props.edit()
  }
  handleNew(){
    this.props.new()
  }

  handleDelete(){
    this.props.delete()
  }

  render(){
    return(
      <div className="Buttons">
        <button className="button-arrow"
        onClick={() => {this.handlePrevious()}}>&lt; Previous</button>
        <div>
        <button className="button-middle"
        onClick={() => {this.handleEdit()}}>Edit</button>
        <button className="button-middle"
        onClick={() => {this.handleDelete()}}>Delete</button>
        <button className="button-middle"
        onClick={() => {this.handleNew()}}>New</button>
        </div>
        <button className="button-arrow"
        onClick={() => {this.handleNext()}}>Next &gt;</button>
      </div>
    )
  }
}

export default Buttons