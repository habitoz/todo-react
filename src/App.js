import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

/* eslint-disable */
function App() {
  const [todos, setTodos] = useState([]);
  const [todoDesc, setTodoDesc] = useState('');

  const clearAllCompleted = ($e) => {
    $e.preventDefault();
    setTodos((pState) => pState.filter((todoItem) => !todoItem.completed));
  };
  const handleInputChange = ($e) => {
    if ($e.key === 'Enter') {
      $e.preventDefault();
      setTodos((pState) => ([...pState, {
        completed: false,
        index: pState.length + 1,
        description: todoDesc,
      }]));
      setTodoDesc('');
      $e.target.value = '';
    } else setTodoDesc($e.target.value);
  };
  return (
    <section className="todo-container">
      <div className="todo-header list-item">
        <h1>Todos</h1>
        <i className="fa fa-refresh icon" />
      </div>
      <div className="input-wrapper">
        <input onKeyUp={handleInputChange} className="todo-input" id="todo-input" type="text" enterKeyHint="enter" placeholder="add to your list ..." />
        <i className="fa fa-arrow-turn-down enter-key-icon" />
      </div>
      <TodoList todoSetter={setTodos} todos={todos} />
      <div className="clear-content">
        <a onClick={clearAllCompleted} href="" role="button" id="clearAll">Clear all completed</a>
      </div>
    </section>
  );
}

export default App;
