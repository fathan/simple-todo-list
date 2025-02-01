import { useState } from "react";
import { useTodoStore } from "@/stores/useTodoStore";

const InputTodo: React.FC = () => {
  const [description, setDescription] = useState('');

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (description.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      description,
      status: true,
    };

    addTodo(newTodo);
    setDescription('');
  };

  return (
    <form onSubmit={handleAddTodo} className="p-4">
      <div className="relative w-full">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-e-lg rounded-s-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Input your todo task"
        />

        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 px-6 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default InputTodo;