import React from 'react'
import TodoItem from './todoItem'
import { useSelector } from 'react-redux';

const TodoList = () => {

    const todos = useSelector(state => state.todos);

  return (

    <div>
        Todo List: <br/>
        {todos.map(todoItem => {
            return (
                <TodoItem 
                id={todoItem.id}
                key={todoItem.id} 
                text={todoItem.text} isCompleted={todoItem.completed} />
            )
        })}
    </div>
  )
}

export default TodoList;