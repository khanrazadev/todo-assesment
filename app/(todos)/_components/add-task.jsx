"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addTodo } from "@/lib/features/todos/todosSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !description) {
      console.log("ERROR");
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      description: description,
      completed: false,
    };

    dispatch(addTodo(newTodo));

    setTitle("");
    setDescription("");
  };

  return (
    <div className=" h-full md:px-10 flex flex-col gap-6 py-20">
      <label className="text-headline">Add task</label>
      <div className="space-y-2">
        <label>Task Title</label>
        <Input
          type="text"
          value={title}
          placeholder="Enter task title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label>Task Description</label>
        <Textarea
          value={description}
          type="text"
          placeholder="Enter task description"
          className=" h-[123px] resize-none"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button className="w-full mt-10" onClick={handleSubmit}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
