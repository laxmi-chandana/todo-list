import React from 'react'
import TodoItem from './TodoItem.js'

export default class TodoList extends React.Component{
    render(){
        const { items, handleClear, handleDelete, handleEdit} = this.props
        return (
            <ul className = "list-group my-5">
                <h1 className = "text-capitalize text-center"> Todo List </h1>
                {items.map(
                    item =>{
                        return(
                            <TodoItem 
                                key = {item.id}
                                title = {item.title}
                                handleDelete = {() => handleDelete(item.id)}
                                handleEdit = { () => handleEdit(item.id)}
                            />
                        )
                    })
                }
                <button 
                    type = "button"
                    className = "btn btn-danger btn-block text-uppercase mt-5"
                    onClick = {handleClear}
                >
                    clear List
                </button>
            </ul>
        )
    }
}