import React, { Component } from "react"
import Card from "./Components/Card"
import Buttons from "./Components/Buttons"
import "./App.css"
import data from "./data"

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: [],
      currentValue: 0,
    }
  }
  componentDidMount() {
    this.setState({ arr: data })
  }

  handlePrevious = () => {
    let { currentValue, arr } = this.state
    currentValue === 0 ? currentValue = arr.length - 1 : currentValue--
    this.setState({ currentValue })
  }
  handleNext = () => {
    let { currentValue, arr } = this.state
    currentValue === arr.length - 1 ? currentValue = 0 : currentValue++
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
      <div>
        <header className="App-header">Home</header>
        <div className="App-body">
          <div className="Main">
            {arr.length > 0 && (
              <Card
                data={arr[currentValue]}
                length={arr.length}
                index={currentValue + 1}
              />
            )}
            <Buttons
              previous={this.handlePrevious}
              remove={this.handleDelete}
              next={this.handleNext}
              add={this.handleNew}
              edit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
