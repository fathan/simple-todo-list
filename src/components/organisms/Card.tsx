'use client';

import InputTodo from "../molecules/InputTodo";
import ItemTodo from "../molecules/ItemTodo";
import ItemTodoDone from "../molecules/ItemTodoDone";

import { useTodoStore } from '@/stores/useTodoStore';

const Card = () => {
  const { todos } = useTodoStore();

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const currentDate = new Date();

  const formattedDate = formatDate(currentDate);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg w-full overflow-hidden">
      <div className="flex items-center justify-between bg-gray-700 p-4">
        <h1 className="text-xl font-bold text-gray-300">
          Todo
        </h1>
  
        <div className="text-right">
          <div>Today</div>
          <div>{ formattedDate }</div>
        </div>
      </div>

      <InputTodo />

      <div className="flex flex-col gap-4 p-4">
        {todos.map((todo) => {
          if (todo.status) {
            return (
              <ItemTodo
                key={todo.id}
                id={todo.id}
                status={todo.status}
                description={todo.description}
              />
            )
          }
        }
        )}
      </div>

      <div className="flex flex-col gap-4 p-4">
        {todos.map((todo) => {
          if (!todo.status) {
            return (
              <ItemTodoDone
                key={todo.id}
                id={todo.id}
                description={todo.description}
              />
            )
          }
        })}
      </div>
    </div>
  );
};

export default Card;
