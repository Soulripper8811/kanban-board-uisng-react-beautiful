"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { BiDotsVertical } from "react-icons/bi";
import CardItem from "./CardItem";
import BoardData from "@/data/board-data.json";
import AddTask from "./AddTask";
import { getAllTask } from "@/actions/Task.actions";
import { Tasks } from "@/types";

interface MainPageProps {
  tasks: Tasks[];
}
const MainPage = ({ tasks }: MainPageProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [boardData, setBoardData] = useState(tasks);

  return (
    <div className="border">
      <div className="p-10">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold">Company Task</h4>
        </div>

        <div className="grid grid-cols-4 gap-5 my-5">
          {boardData.map((board, index) => (
            <div key={index}>
              <div className="bg-gray-100 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden">
                <span className="w-full h-1 bg-gradient-to-r from-pink-700 to-red-700 absolute inset-x-0 top-0"></span>
                <h4 className="flex justify-between items-center mb-2">
                  <span className="text-2xl text-gray-600">{board.stage}</span>
                  <BiDotsVertical className="w-5 h-5 text-gray-500" />
                </h4>

                <CardItem data={board} />
                <button
                  className="flex justify-center items-center mt-6 text-lg space-x-2"
                  onClick={() => setIsOpenModal(true)}
                >
                  <span>Add Task</span>
                  <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                </button>
                {isOpenModal && (
                  <AddTask
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
