import React, { Component } from 'react';
import shortid from 'shortid';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import Container from './components/Container';
import Filter from './components/Filter';
import TodoEditor from './components/TodoEditor';
import initialTodos from './assets/todo.json';
import Form from './components/Form/';

import './styles.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: '',
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  

  toggleCompleted = todoId => {
    

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <h1 className="title">State of Component</h1>

        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />

        <Form onSubmit={this.formSubmitHandler} />
        

        <Counter initialValue={1234} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Total: {totalTodoCount}</p>
          <p>Number of completed: {completedTodoCount}</p>
        </div>
        
        <Container>
          
          <div>
            <p>Всего заметок: {totalTodoCount}</p>
            <p>Выполнено: {completedTodoCount}</p>
          </div>

          <TodoEditor onSubmit={this.addTodo} />

            <Filter value={filter} onChange={this.changeFilter} />

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Container>
      </>
    );
  }
}

export default App;
