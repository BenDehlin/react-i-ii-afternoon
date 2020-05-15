import React, { Component } from "react"
import Body from "./Body"
import Buttons from "./Buttons"
import "../App.css"
import data from "../data"

class Main extends Component {
  constructor() {
    super()
    this.state = {
      arr: [],
      currentValue: 0,
    }
  }

  componentDidMount(){
    this.setState({arr: data})
  }

  handlePrevious = () => {
    let { currentValue, arr } = this.state
    let lastIndex = arr.length - 1
    if (currentValue === 0) currentValue = lastIndex
    else currentValue--

    this.setState({ currentValue })
  }
  handleNext = () => {
    let { currentValue, arr } = this.state
    let lastIndex = arr.length - 1
    if (currentValue === lastIndex) currentValue = 0
    else currentValue++
    this.setState({ currentValue })
  }
  handleEdit = () => {
    alert("Edit coming soon")
  }
  handleNew = () => {
    alert("Add New coming soon")
  }
  handleDelete = () => {
    let { currentValue, arr } = this.state
    arr.splice(currentValue, 1)
    this.setState({ arr, currentValue: 0 })
  }

  render() {
    const {arr, currentValue} = this.state
    return (
      <div className="Main">
        {arr.length > 0 && <Body
          data={arr[currentValue]}
          length={arr.length}
          index={currentValue + 1}
        />}
        <Buttons
          previous={this.handlePrevious}
          remove={this.handleDelete}
          next={this.handleNext}
          add={this.handleNew}
          edit={this.handleEdit}
        />
      </div>
    )
  }
}

export default Main
