import React from 'react';
import uuid from "react-uuid"
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import "bootstrap/dist/css/bootstrap.min.css";



export default class App extends React.Component {

  state = {
    items:[],
    item:"",
    id: uuid(),
    editItem: false

  }
  handleChange = (event) =>{
    this.setState({
      item: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updated = [...this.state.items,newItem]
    this.setState({
      items: updated,
      id: uuid(),
      item: "",
      editItem: false
    })

  }

  handleClear = () =>{
    this.setState({
      items: []
    })

  }

  handleEdit = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const selectedItems = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      id: id,
      item: selectedItems.title,
      editItem: true
    })
  }

  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })

  }

  render(){
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-10 mx-auto col-md-8 mt-5">
          <TodoInput 
            item = {this.state.item}
            handleChange = {this.handleChange} 
            handleSubmit = {this.handleSubmit}
            editItem = {this.state.editItem}
          />
          <TodoList 
            items = {this.state.items}
            handleClear = {this.handleClear}
            handleDelete = {this.handleDelete}
            handleEdit = {this.handleEdit}
          />
          </div>
        </div>
      </div>
    );
  }
}

