import React, {Component} from 'react';
import './App.css';

class Status extends Component {

    constructor() {
        super();
        this.state = {
            likes: 0
        }
    }

    like(){
        this.states.likes++;
    }

    render() {
        return (
            <div className="status">
                <p>{this.props.mytext}</p>
                <p>
                    <button onClick={this.like()}>{this.state.likes} Like</button>
                </p>
            </div>
        );
    }

}

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <Status mytext="Wow, I had the most delicious luch today."/>

                <Status mytext="There was not traffic today."/>

                <Status mytext="finally finished  that big project."/>

                <Status mytext="happy learning reactjs."/>

            </header>
        </div>
    );
}

export default App;
