import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo}) => {
  return (
    <ul className="TodoList">
        <h2 className='TodoList__title'>Todo List</h2>
        
      {todos.map(({id, text}) => (
        <li key={id} className="TodoList__item">
          <p className='TodoList__text'>{text}</p>
          <button className='TodoList__button' onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
