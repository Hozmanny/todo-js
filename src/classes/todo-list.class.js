import {Todo} from './todo.class';
export class TodoList {
    constructor( ) {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){ //metodo
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        for (const todo of this.todos) {
            // console.log(id, todo.id);
            if (todo.id == id) {
                
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        // if (localStorage.getItem('todo')) {
        //     this.todos = JSON.parse(localStorage.getItem('todo') );
        //     console.log(this.todos);
        // } else {
        //     this.todos = [];
        // }

        this.todos = ( localStorage.getItem('todo') ) ? this.todos = JSON.parse(localStorage.getItem('todo')) : [];

        // this.todos = this.todos.map(obj => Todo.fromJson(obj)); es lo mismo abajo
        this.todos = this.todos.map(Todo.fromJson);
    }
}