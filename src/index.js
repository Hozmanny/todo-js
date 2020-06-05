import './styles.css';

import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();




// const tarea = new Todo('aprender JS!!');
// todoList.nuevoTodo(tarea);
//         // tarea.completado = true;
//         // todoList.nuevoTodo(tarea2);
//         // console.log(todoList);
// crearTodoHtml(tarea);

// localStorage.setItem('mi-llave','abc123');
// sessionStorage.setItem('mi-llave','abc123');
// setTimeout( () => {
//     localStorage.removeItem('mi-llave');
// },1500);


todoList.todos.forEach(todo => crearTodoHtml (todo));

// const newTodo = new Todo('Aprender JavaScript');


// todoList.todos[0].imprimirClase();
console.log('todos',todoList.todos);