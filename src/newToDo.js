import React from "react";
import "./myToDos.css";

export default class ToDos extends React.Component {

    state = {
        isComplete: false,
        isExist: "true"
    };

    removeItem = () => {
        this.setState({
            isExist: !this.state.isExist
        })
    };

    completeItem = () => {
        this.setState({
            isComplete: "false"
        })
    };


    render() {
        if (this.state.isExist === "true") {
            return (
                <div className="toDoContainer">
                    <span className={this.state.isComplete ? "listItemLine" : "listItem"} key={this.props.index}>{this.props.item}</span>
                    <button onClick={this.completeItem}>✓</button>
                    <button onClick={this.removeItem}>✕</button>
                </div>
            )
        }

    }
}