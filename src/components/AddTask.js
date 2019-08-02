import React from "react";
import { connect } from 'react-redux'

import { addTask } from '../actions'

import './AddTask.css'

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.doSomething = this.doSomething.bind(this);
        this.inputRef = React.createRef();
    }
    doSomething(event) {
        event.preventDefault();
        this.props.addTask(this.inputRef.current.value);
        this.inputRef.current.value = "";
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.doSomething}>
                    <label className="form__label">
                        ADD NEW TASK{" "}
                        <input type="text" ref={this.inputRef} className="form__input"/>
                    </label>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasklist: state.tasklist
    }
}

export default connect(mapStateToProps, {
    addTask
})(AddTask);
