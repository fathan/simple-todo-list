import Image from 'next/image';

import { ITodo } from "@/interface/todo";

import { useTodoStore } from "@/stores/useTodoStore";

import IconCheck from '@/assets/svg/icon-check.svg';
import IconUncheck from '@/assets/svg/icon-uncheck.svg';
import { useState } from 'react';

const ItemTodoDone: React.FC<ITodo> = ({ id, description, status }) => {

  const { toggleStatus, deleteTodo, updateTodoDescription } = useTodoStore();

  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const onClickDeleteData = () => {
    deleteTodo(id);
  };

  const onClickEditData = () => {
    setIsEditing(true);
  };

  const onCancelEdit = () => {
    setIsEditing(false);
    setNewDescription(description);
  };

  const onSaveEdit = () => {
    updateTodoDescription(id, newDescription); // assuming `updateTodoDescription` is available in your store
    setIsEditing(false);
  };

  const ActionEditButton = () => (
    <div
      onClick={ onClickEditData }
      className="text-yellow-400 cursor-pointer hover:text-yellow-600"
    >
      edit
    </div>
  );

  const ActionDeleteButton = () => (
    <div
      onClick={ onClickDeleteData }
      className="text-red-400 cursor-pointer hover:text-red-600"
    >
      delete
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-between">
        <div
          className='flex flex-row'
        >
          <div
            className='mt-1 mr-2'
            onClick={ () => toggleStatus(id) }
          >
            { status ? 
              <Image
                src={ IconUncheck }
                width={18}
                height={18}
                alt="Picture of the author"
              /> : 
              <Image
                src={ IconCheck }
                width={18}
                height={18}
                alt="Picture of the author"
              />
            }
          </div>

          <div className={`text-gray-200 cursor-pointer ${ !status ? "line-through" : ""}` }>
            { isEditing ? (
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="bg-transparent text-gray-200 focus:outline-none"
              />
            ) : (
              <span onClick={ () => toggleStatus(id) }>
                { description }
              </span>
            ) }
          </div>
        </div>

        <div className="flex flex-row gap-3">
          { status && !isEditing && <ActionEditButton /> }

          { isEditing ? (
            <>
              <div
                onClick={ onSaveEdit }
                className="text-green-400 cursor-pointer hover:text-green-600"
              >
                save
              </div>
              <div
                onClick={ onCancelEdit }
                className="text-gray-400 cursor-pointer hover:text-gray-600"
              >
                cancel
              </div>
            </>
          ) : (
            <ActionDeleteButton />
          ) }
        </div>
      </div> 
    </>
  )
};

export default ItemTodoDone;
