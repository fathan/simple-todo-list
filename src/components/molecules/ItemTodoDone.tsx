import { ITodo } from "@/interface/todo";

import { useTodoStore } from "@/stores/useTodoStore";

const ItemTodoDone: React.FC<ITodo> = ({ id, description }) => {

  const { deleteTodo } = useTodoStore();

  const onClickDeleteData = () => {
    deleteTodo(id);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-gray-200 line-through">
          { description }
        </div>

        <div
          onClick={ onClickDeleteData }
          className="text-red-400 cursor-pointer hover:text-red-600"
        >
          delete
        </div>
      </div> 
    </>
  )
};

export default ItemTodoDone;
