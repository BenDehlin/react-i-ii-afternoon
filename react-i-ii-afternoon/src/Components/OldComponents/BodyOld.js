import React, {Component} from 'react'
import '../App.css';


class Body extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    let list = this.props.data.favoriteMovies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })
    return(
      <div  className="Body">
        <div className="counter-container">
          <p className="counter">{this.props.index}/{this.props.length}</p>
        </div>
        <div className="main-text">
          <h2 className="name">{this.props.data.name.first}</h2>
          <p className="bold">From: <span>{this.props.data.city}</span></p>
          <p className="bold">Job Title: <span>{this.props.data.title}</span></p>
          <p className="bold">Employer: <span>{this.props.data.employer}</span></p>
          <p className="bold">Favorite Movies:</p>
          <ol>{list}</ol>
        </div>
      </div>
    )
  }
}

export default Body