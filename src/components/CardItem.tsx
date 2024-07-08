import React from "react";
import Image from "next/image";
import { HiChatAlt2 } from "react-icons/hi";
import { PaperClipIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Draggable } from "react-beautiful-dnd";

interface CardItemProps {
  id: number;
  priority: number;
  title: string;
  chat: number;
  attachment: number;
  assignees: { avt: string }[];
}

const CardItem = ({ data }: { data: CardItemProps }) => {
  return (
    <Draggable index={data.id} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          className="bg-white rounded-md p-3 mt-3"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <label
            className={`bg-gradient-to-r px-2 py-1 rounded text-white text-sm ${
              data.priority === 0
                ? "from-blue-500 to-blue-200"
                : data.priority === 1
                ? "from-green-500 to-green-200"
                : "from-red-500 to-red-200"
            }`}
          >
            {data.priority === 0
              ? "Low Priority"
              : data.priority === 1
              ? "Medium Priority"
              : "High Priority"}
          </label>
          <h5 className="text-md my-3 text-lg leading-6">{data.title}</h5>
          <div className="flex justify-between">
            <div className="flex space-x-4 items-center">
              <span className="flex space-x-2 items-center">
                <HiChatAlt2 className="w-4 h-4 text-gray-500" />
                <span>{data.chat}</span>
              </span>
              <span className="flex space-x-4 items-center">
                <PaperClipIcon className="w-4 h-4 text-gray-500" />
                <span>{data.attachment}</span>
              </span>
            </div>
            <ul className="flex space-x-3">
              {data.assignees.map((assignee, index) => (
                <li key={index}>
                  <Image
                    src={assignee.avt}
                    alt="avatar logo"
                    width={36}
                    height={36}
                    objectFit="cover"
                    className="rounded-full"
                  />
                </li>
              ))}
              <li>
                <button className="border border-dashed flex items-center w-9 h-9 rounded-full">
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
