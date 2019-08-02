import React from "react";
import { connect } from "react-redux";

import { deleteTask, editTask, taskCompleted } from "../actions";

import './Tasklist.css'

class Tasklist extends React.Component {
    makeEditable(event, taskID) {
        const span = event.currentTarget.parentNode.firstChild;
        const form = document.createElement("form");
        const input = document.createElement("input");

        console.log(span.key)

        form.appendChild(input);
        input.value = span.innerHTML;
        span.parentNode.replaceChild(form, span);

        form.addEventListener("submit", event => {
            event.preventDefault();
            this.props.editTask(taskID, form.firstChild.value);
            span.innerHTML = form.firstChild.value;
            form.parentNode.replaceChild(span, form);
        });
    }

    renderTasks() {
        return this.props.tasklist.map(task => {
            const style = task.completed === true ? 'line-through' : 'none';
            return (
                <div
                    key={task.taskID}
                    onClick={() => this.props.taskCompleted(task.taskID)}
                    className="task"
                >
                    <span style={{textDecoration: style}}>{task.taskDescription}</span>
                    <button onClick={() => this.props.deleteTask(task.taskID)}>
                        Delete Task
                    </button>
                    <button
                        onClick={event => this.makeEditable(event, task.taskID)}
                    >
                        Edit task
                    </button>
                </div>
            );
        });
    }

    render() {
        return <div className="tasklist">{this.renderTasks()}</div>;
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        tasklist: state.tasklist
    };
};

export default connect(
    mapStateToProps,
    {
        deleteTask,
        editTask,
        taskCompleted
    }
)(Tasklist);
