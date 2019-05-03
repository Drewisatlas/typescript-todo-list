interface Todo {
  name: string;
  completed?: boolean; // not every todo object needs a completed property
}

interface ITodoService {
  getById (todoID: number): Todo;
  getAll() : Todo[];
  delete (todoID: number): void;
  add(todo: Todo): Todo;
}

let todo: Todo = {
  name: 'Pick up dry cleaning'
};

class TodoService {

  constructor(private todos: Todo[]) {
  }

  getAll() {
    return this.todos;
  }
}
