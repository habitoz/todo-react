import React, { useState } from 'react';

/* eslint-disable react/prop-types,react/no-array-index-key, no-nested-ternary,
jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */
export default function TodoList({ todos, todoSetter }) {
  const [editMode, setEditMode] = useState(null);
  const changeStatus = (index) => {
    todoSetter((pState) => pState.map((todo, todoIndex) => (
      { ...todo, completed: todoIndex === index ? !todo.completed : todo.completed })));
  };
  const handleTodoEdit = ($e) => {
    if ($e.key === 'Enter') {
      $e.preventDefault();
      return setEditMode(null);
    }
    return todoSetter((pState) => pState.map((todo, index) => (
      { ...todo, description: editMode === index ? $e.target.value : todo.description })));
  };
  return (
    <ul className="todo-list" id="todo-list">
      {
            todos.map((todo, index) => (
              <li className={`list-item ${index === editMode ? 'highlight-todo' : ''}`} key={index}>
                <div className="todoDescriptionContainer todo-description">
                  {
                  true && (
                    <input type="checkbox" onChange={() => changeStatus(index)} checked={todo.completed} />
                  )
                }
                  { (editMode === null || (editMode !== index)) && (
                  <p className={`${todo.completed ? 'completed-todo' : ''}`} onClick={() => setEditMode(index)}>{todo.description}</p>
                  )}
                  { editMode != null && (editMode === index) && (
                  <input onChange={handleTodoEdit} className="descriptionInput" type="text" value={todo.description} />
                  )}
                </div>
              </li>
            ))
            }
    </ul>
  );
}
