import { useState } from "react";

export default function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if(newItem === '') return;

    onSubmit(newItem);

    //clears out the input field after submitting
    setNewItem("");
  }

  return (
    <form onSubmit={submitHandler} className="form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem}
            onChange={event => setNewItem(event.target.value)}
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
  )
}