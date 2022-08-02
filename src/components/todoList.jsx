import React, { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();

        let itemArray = this.state.items;

        if (this.__inputElement.value !== "") {
            itemArray.unshift({
                text: this.__inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this.__inputElement.value = "";

            console.log(itemArray);
        }
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <>
                <div id="container">
                    <div className="todoListMain">
                        <div className="header">
                            <form onSubmit={this.addItem}>
                                <input type="text" 
                                    placeholder="Enter task"
                                    ref={
                                        (a) => this.__inputElement = a
                                    } />
                                <button type="submit">Add</button>
                            </form>

                            <TodoItem entries={this.state.items}
                                      delete={this.deleteItem} /> 
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TodoList;