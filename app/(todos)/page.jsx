import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const TodosPage = () => {
  return (
    <div className="grid grid-cols-3 h-full">
      <div className=" bg-[#E8F2FF] col-span-1">
        <div className=" h-full  mx-auto max-w-sm flex flex-col gap-6 py-20">
          <label className="text-headline">Add task</label>
          <div className="space-y-2">
            <label>Task Title</label>
            <Input type="email" id="email" placeholder="Enter task title" />
          </div>
          <div className="space-y-2">
            <label>Task Description</label>
            <Textarea
              type="email"
              id="email"
              placeholder="Enter task description"
              className=" h-[123px] resize-none"
            />
          </div>
          <Button className="w-full mt-10">Add Task</Button>
        </div>
      </div>
      <div className="col-span-2">
        <div className=" h-full px-10 flex flex-col gap-6 py-20">
          <label className="text-headline">To do tasks</label>

          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="gap-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="done">Done</TabsTrigger>
              <TabsTrigger value="to-do">To Do</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Bhaoya</TabsContent>
            <TabsContent value="password">Hello</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
