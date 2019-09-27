import React from "react";
import { observer } from "mobx-react";

@observer
export default class TodoList extends React.Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }

  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }

  render() {
    const { todos, filter, filteredTodos, clearComplete } = this.props.store;
    return (
      <div>
        <h1>todos</h1>
        <label>Enter new todos</label>
        <br />
        <input onKeyPress={this.createNew.bind(this)} />
        <br />
        <label>Enter the filter</label>
        <br />
        <input
          className="filter"
          value={filter}
          onChange={this.filter.bind(this)}
        />
        <ul>
          {filteredTodos.map(todo => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  value={todo.complete}
                  checked={todo.complete}
                  onChange={this.toggleComplete.bind(this, todo)}
                />
                {todo.value}
              </li>
            );
          })}
        </ul>
        <a href="#" onClick={clearComplete}>
          Clear Complete
        </a>
      </div>
    );
  }
}
