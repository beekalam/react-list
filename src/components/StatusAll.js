import React, {Component} from "react";
import StatusList from "./StatusList";


export default class StatusAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newStatusText: '',
            statuses: [
                "Wow, I had the most delicious luch today.",
                "There was not traffic today.",
                "finally finished  that big project.",
                "happy learning reactjs.",
            ]
        };
        this.delete = this.delete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(ev) {
        console.log(ev.target.value);
        this.setState({newStatusText: ev.target.value});
    }

    handleSubmit(ev) {
        ev.preventDefault();
        let newStatuses = [this.state.newStatusText, ...this.state.statuses];
        this.setState({statuses: newStatuses, newStatusText: ''})
    }

    delete(index) {
        let copy = [...this.state.statuses];
        copy.splice(index, 1);
        this.setState({statuses: copy});
    }

    render() {
        return (
            <div>
                <div className="status">
                    <h1>Enter New Status</h1>
                    <form action="" onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.newStatusText}
                               onChange={this.handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="status">
                    <h1>All Statuses:</h1>
                    <StatusList statuses={this.state.statuses}
                                delete={this.delete}/>
                </div>
            </div>
        );
    }
}

