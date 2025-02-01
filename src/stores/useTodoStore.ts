import { ITodo } from '@/interface/todo';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IStateTodo {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: number | undefined) => void;
  updateTodoDescription: (id: number | undefined, newDescription: string) => void;
  toggleStatus: (id: number | undefined) => void;
}

export const useTodoStore = create<IStateTodo>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo) => {
        set((state) => ({
          todos: [...state.todos, todo]
        }))
      },
      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id)
        }))
      },
      updateTodoDescription (id, newDescription) {
        set((state) => {
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) {
            todo.description = newDescription;
          }
          return { todos: [...state.todos] };
        })
      },
      toggleStatus: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
          )
        }))
      }
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
