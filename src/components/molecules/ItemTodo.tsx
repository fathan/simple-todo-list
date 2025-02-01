import { ITodo } from "@/interface/todo";
import { useTodoStore } from '@/stores/useTodoStore';

const ItemTodo: React.FC<ITodo> = ({ id, description, status }) => {
  const { toggleStatus } = useTodoStore();

  return (
    <div className="flex flex-row gap-4">
      <input 
        type="checkbox" 
        checked={!status} 
        onChange={() => {
          toggleStatus(id);
        }}
      />
      
      <p className="text-gray-200">
        { description }
      </p>
    </div>
  );
};

export default ItemTodo;