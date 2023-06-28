import React, { FC, useState } from "react";
import Todo from "./Todo";
import { ITodosListProps } from "./types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { ITodo } from "../../types/types";

// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
//   padding: 10,
//   margin: "0 50px 15px 50px",
//   background: isDragging ? "#4a2975" : "white",
//   color: isDragging ? "white" : "black",
//   border: "1px solid black",
//   fontSize: "20px",
//   borderRadius: "5px",

//   ...draggableStyle,
// });

const TodosList: FC<ITodosListProps> = ({
  todosArray,
  deleteTodo,
  toggleTodo,
}) => {
  const [todo, setTodo] = useState<ITodo[] | null | undefined>(todosArray);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const items = Array.from(todo || []);

    const [newOrder] = items.slice(source.index, 1);

    items.splice(destination.index, 0, newOrder);

    setTodo(items);
  };

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
              {todosArray?.map((onetodo, index) => (
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
                      // style={getItemStyle(
                      //   snapshot.isDragging,
                      //   provided.draggableProps.style
                      // )}
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
