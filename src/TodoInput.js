import React from 'react'

export default class TodoInput extends React.Component{
    render(){
        const {item, handleChange, handleSubmit,editItem} = this.props
        return(
            <div className = "card card-body my-3">
                <h1 className="text-capitalize text-center"> TODO Entriees </h1>
                <form onSubmit = {handleSubmit}>
                    <div className = "input-group">
                        <div className = "input-group-prepend">
                            <div className = "input-group-text bg-primary text-white">
                                <i className = "fas fa-book" />
                            </div>
                        </div>
                        <input 
                        type = "text" 
                        className = "form-control text-capitalize"
                        placeholder = "add todo item"
                        onChange = {handleChange} 
                        value = {item}
                        />
                    </div>
                    <button
                        type = "submit"
                        disabled = {item ? false : true}
                        className = "btn btn-block btn-primary mt-3 text-uppercase"
                    >
                     {editItem ? "Edit Item" : "Add Item"}
                    </button>
                </form>
            </div>
        )
    }
}