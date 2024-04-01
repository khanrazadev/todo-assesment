"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "@/lib/features/todos/todosSlice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import CheckBox from "./checkbox";
import { MdDelete, MdEdit } from "react-icons/md";

const TaskListItem = ({
  todo,
  editTodoId,
  editTodo,
  handleEdit,
  handleDelete,
  handleKeyPress,
  handleDescriptionEdit,
}) => (
  <AccordionItem
    key={todo.id}
    value={todo.id}
    className="border border-[#E4E9F2] rounded-md px-4"
  >
    <div className="flex justify-between">
      <CheckBox todoId={todo.id} checked={todo.completed} />
      <AccordionTrigger className="w-full">
        {editTodoId === todo.id && editTodo ? (
          <Input
            defaultValue={todo.title}
            onKeyPress={(e) => handleKeyPress(e, todo.id)}
          />
        ) : (
          <h1
            className={
              todo.completed
                ? "text-[#B6B6B6] line-through text-xs md:text-base"
                : "text-xs md:text-base"
            }
          >
            {todo.title}
          </h1>
        )}
      </AccordionTrigger>
      <div className="flex flex-col md:flex-row  md:items-center justify-center gap-3">
        {!todo.completed && (
          <MdEdit
            onClick={() => handleEdit(todo.id)}
            className="min-w-6 cursor-pointer"
            size={"20px"}
          />
        )}
        <MdDelete
          onClick={() => handleDelete(todo.id)}
          className="min-w-6 cursor-pointer"
          color="red"
          size={"20px"}
        />
      </div>
    </div>
    <AccordionContent className="border-t p-4 text-wrap">
      {editTodoId === todo.id && editTodo ? (
        <Input
          defaultValue={todo.description}
          onKeyPress={(e) => handleDescriptionEdit(e, todo.id)}
        />
      ) : (
        <h1 className="text-slate-500 text-xs md:text-base">
          {todo.description}
        </h1>
      )}
    </AccordionContent>
  </AccordionItem>
);

const TaskList = () => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodo, setEditTodo] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleEdit = (todoId) => {
    setEditTodo(!editTodo);
    setEditTodoId(todoId);
  };

  const handleKeyPress = (e, todoId) => {
    if (e.key === "Enter") {
      const updatedTitle = e.target.value;
      const updatedTodo = { ...todos.find((todo) => todo.id === todoId) };
      updatedTodo.title = updatedTitle;
      dispatch(updateTodo(updatedTodo));
      setEditTodoId(null);
    }
  };

  const handleDescriptionEdit = (e, todoId) => {
    if (e.key === "Enter") {
      const updatedDescription = e.target.value;
      const updatedTodo = { ...todos.find((todo) => todo.id === todoId) };
      updatedTodo.description = updatedDescription;
      dispatch(updateTodo(updatedTodo));
      setEditTodoId(null);
    }
  };

  const filteredTodos = (filter) => {
    switch (filter) {
      case "done":
        return todos.filter((todo) => todo.completed);
      case "to-do":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="h-full px-10 flex flex-col gap-6 py-20 w-full">
      <label className="text-headline">To do tasks</label>
      <Tabs defaultValue="all" className="">
        <TabsList className="gap-4 flex-wrap">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
          <TabsTrigger value="to-do">To Do</TabsTrigger>
        </TabsList>
        {todos.length > 0 ? (
          <div className="w-full my-8">
            <TabsContent value="all" className="space-y-3">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {filteredTodos("all").map((todo) => (
                  <TaskListItem
                    key={todo.id}
                    todo={todo}
                    editTodoId={editTodoId}
                    editTodo={editTodo}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleKeyPress={handleKeyPress}
                    handleDescriptionEdit={handleDescriptionEdit}
                  />
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="done">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {filteredTodos("done").map((todo) => (
                  <TaskListItem
                    key={todo.id}
                    todo={todo}
                    editTodoId={editTodoId}
                    editTodo={editTodo}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleKeyPress={handleKeyPress}
                    handleDescriptionEdit={handleDescriptionEdit}
                  />
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="to-do">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {filteredTodos("to-do").map((todo) => (
                  <TaskListItem
                    key={todo.id}
                    todo={todo}
                    editTodoId={editTodoId}
                    editTodo={editTodo}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleKeyPress={handleKeyPress}
                    handleDescriptionEdit={handleDescriptionEdit}
                  />
                ))}
              </Accordion>
            </TabsContent>
          </div>
        ) : (
          <div className="w-full h-full md:border rounded-md my-8 flex justify-center text-slate-500 items-center">
            <h1>Add Todos</h1>
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default TaskList;
