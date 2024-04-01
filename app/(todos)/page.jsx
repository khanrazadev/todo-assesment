import React from "react";
import AddTask from "./_components/add-task";
import TaskList from "./_components/task-list";

const TodosPage = () => {
  return (
    <div className="lg:grid grid-cols-3 h-full">
      <div className=" bg-[#E8F2FF] col-span-1 p-4 md:p-0">
        <AddTask />
      </div>
      <div className="col-span-2 overflow-y-auto">
        <TaskList />
      </div>
    </div>
  );
};

export default TodosPage;
