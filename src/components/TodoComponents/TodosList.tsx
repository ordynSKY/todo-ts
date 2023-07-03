import React, { FC, useEffect, useState } from "react";
import Todo from "./Todo";
import { ITodosListProps } from "./types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { ITodo, TTodoArray } from "../../types/types";

const TodosList: FC<ITodosListProps> = ({
  todosArray,
  deleteTodo,
  toggleTodo,
}) => {
  const [todos, setTodos] = useState<TTodoArray>(todosArray);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const items = Array.from(todos || []);

    const [newOrder] = items.splice(source.index, 1);

    items.splice(destination.index, 0, newOrder);

    setTodos(items);
  };

  useEffect(() => {
    setTodos(todosArray);
  }, [todosArray]);

  return (
    <div style={{ width: 800, position: "absolute", left: 100, top: 120 }}>
      <h1 style={{ textAlign: "center" }}>TO DO LIST</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="todo"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos?.map((onetodo, index) => (
                <Draggable
                  key={onetodo.id}
                  draggableId={onetodo.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Todo
                        number={index + 1}
                        todo={onetodo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodosList;
