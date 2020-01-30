import React, {Component} from "react";
import './Status.css';

export default class Status extends Component {

    constructor() {
        super();
        this.state = {
            likes: 0
        };
        this.like = this.like.bind(this);
        this.delete = this.delete.bind(this);
    }

    like() {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    delete() {
        // console.log('index ',this.props.index,this.props);
        this.props.delete(this.props.index);
    }

    render() {
        return (
            <div className="status">
                <div className="close" onClick={this.delete}>x</div>
                <p>{this.props.mytext}</p>
                <p>
                    <button onClick={this.like}>
                        {this.state.likes} Likes
                    </button>
                </p>
            </div>
        );
    }

}

