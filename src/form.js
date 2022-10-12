import React from "react";
import ToDos from "./newToDo";

export default class Form extends React.Component {

    state = {
        inputValue: "",
        myToDos: []
    }

    addItem = () => {
        const list = this.state.myToDos;
        this.setState({
            myToDos: list,
            inputValue: ''
        });
        this.state.myToDos.push(this.state.inputValue);
        console.log(this.state.myToDos);
    };

    handleInput = (e) => {
        this.setState({
            inputValue : e.target.value
        })
    }

    render = () => {
        return (

            <div>
                <input type="text" onInput={this.handleInput} value={this.state.inputValue}/>
                <button type="submit" onClick={this.addItem}>Submit</button>
                {this.state.myToDos.map((item, index) => { return <ToDos key={index} item={item} /> })}
            </div>
        )
    }
}