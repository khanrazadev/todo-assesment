import React from "react";
import { connect } from "react-redux";
import { completedTodo } from "@/lib/features/todos/todosSlice";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  handleCheckboxChange = (e) => {
    const { todoId } = this.props;
    e.target.checked = true;
    this.props.completeTodoAction(todoId);
  };

  render() {
    const { todoId } = this.props;
    const { checked } = this.state;

    return (
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor={`check-${todoId}`}
        >
          <input
            type="checkbox"
            id={`check-${todoId}`}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900"
            onChange={this.handleCheckboxChange}
            checked={checked}
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  completeTodoAction: (todoId) => dispatch(completedTodo(todoId)),
});

export default connect(null, mapDispatchToProps)(CheckBox);
