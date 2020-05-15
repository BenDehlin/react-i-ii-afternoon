import React from "react"
import "../App.css"

const Buttons = ({ previous, next, edit, add, remove }) => (
  <div className="Buttons">
    <button className="button-arrow" onClick={previous}>
      &lt; Previous
    </button>
    <div>
      <button className="button-middle" onClick={edit}>
        Edit
      </button>
      <button className="button-middle" onClick={remove}>
        Delete
      </button>
      <button className="button-middle" onClick={add}>
        New
      </button>
    </div>
    <button className="button-arrow" onClick={next}>
      Next &gt;
    </button>
  </div>
)

export default Buttons
