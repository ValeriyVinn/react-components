import React from 'react';
// import './TodoList.css';
import classNames from 'classnames';
import './TodoList.scss';

// const TodoList = ({ todos, onDeleteTodo }) => {
//   return (
//     <ul className="TodoList">
//       <h2 className="TodoList__title">Todo List</h2>

//       {todos.map(({ id, text }) => (
//         <li key={id} className="TodoList__item">
//           <p className="TodoList__text">{text}</p>
//           <button className="TodoList__button" onClick={() => onDeleteTodo(id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
