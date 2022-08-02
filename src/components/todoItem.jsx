import React, { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.createTask = this.createTask.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }
    
    createTask(item) {
        return <li onClick={() => this.delete(item.key)}
                   key={item.key}>{item.text}</li>
    }

    render() {
        let todoEntries = this.props.entries;
        let listItem = todoEntries.map(this.createTask);
        
        return (
            <ul className="theList">
                {listItem}
            </ul>
        );
    }
}

export default TodoItem;