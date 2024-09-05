import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/slices/todoSlice';

const TodoItem = ({ id, text, isCompleted }) => {

    const dispatch = useDispatch();

    function removeTodoItem(){
        dispatch(removeTodo(id))
    }


  return (
    <div className='todo-item'>
        <input type='checkbox' checked={isCompleted} />
        <p> {text} </p>
        <button onClick={removeTodoItem}>x</button>
    </div>
  )
}

export default TodoItem;