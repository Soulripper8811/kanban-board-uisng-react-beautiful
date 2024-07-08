"use client"

import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { BiDotsVertical } from "react-icons/bi";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CardItem from "./CardItem";
import BoardData from "@/data/board-data.json";

const MainPage = () => {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    // If there's no destination, return
    if (!destination) return;

    // If dropped in the same place, return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceBoardIndex = boardData.findIndex(
      (board) => board.name === source.droppableId
    );
    const destinationBoardIndex = boardData.findIndex(
      (board) => board.name === destination.droppableId
    );

    const sourceBoard = boardData[sourceBoardIndex];
    const destinationBoard = boardData[destinationBoardIndex];

    const sourceItems = Array.from(sourceBoard.Items);
    const destinationItems = Array.from(destinationBoard.Items);

    // Find the dragged item
    const [movedItem] = sourceItems.splice(source.index, 1);

    // Add the dragged item to the destination
    destinationItems.splice(destination.index, 0, movedItem);

    const newBoardData = [...boardData];
    newBoardData[sourceBoardIndex] = {
      ...sourceBoard,
      Items: sourceItems,
    };
    newBoardData[destinationBoardIndex] = {
      ...destinationBoard,
      Items: destinationItems,
    };

    setBoardData(newBoardData);
  };

  return (
    <div className="border">
      <div className="p-10">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold">Company Task</h4>
        </div>
        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-4 gap-5 my-5">
              {boardData.map((board, index) => (
                <div key={index}>
                  <Droppable droppableId={board.name}>
                    {(provided) => (
                      <div
                        className="bg-gray-100 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <span className="w-full h-1 bg-gradient-to-r from-pink-700 to-red-700 absolute inset-x-0 top-0"></span>
                        <h4 className="flex justify-between items-center mb-2">
                          <span className="text-2xl text-gray-600">
                            {board.name}
                          </span>
                          <BiDotsVertical className="w-5 h-5 text-gray-500" />
                        </h4>
                        {board.Items.length > 0 &&
                          board.Items.map((item, Iindex) => (
                            <CardItem key={item.id} data={item} />
                          ))}
                        {provided.placeholder}
                        <button className="flex justify-center items-center mt-6 text-lg space-x-2">
                          <span>Add Task</span>
                          <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </div>
          </DragDropContext>
        )}
      </div>
    </div>
  );
};

export default MainPage;
