import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { type Block } from "~/campaignEditor/utils/blockattributes";
import SortableItem from "./SortableItem";

export default function CampaignEditorEmailBody({
  blocks,
  isDragInProgress,
  handleDeleteBlock,
  setIsEditing,
  isEditing,
  setEditorValues,
}: {
  blocks: Block[];
  isDragInProgress: boolean;
  handleDeleteBlock: (id: string) => void;
  setEditorValues: React.Dispatch<React.SetStateAction<any>>;
  isEditing: {
    blockId: string;
    current: boolean;
    initialValues: any;
  };
  setIsEditing: React.Dispatch<
    React.SetStateAction<{
      blockId: string;
      current: boolean;
      initialValues: any;
    }>
  >;
}) {
  return (
    <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
      {blocks.map((item) => {
        return (
          <div
            key={item.id}
            className={`${isDragInProgress ? "" : "group"} ${
              isEditing && isEditing.blockId === item.id
                ? "border-2 border-dashed border-blue-600"
                : ""
            } relative flex flex-row-reverse`}
          >
            <div className="absolute -right-4 -top-4 hidden flex-col-reverse items-center justify-center gap-2 group-hover:flex">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-green-200 shadow"
                onClick={() => {
                  setIsEditing({
                    blockId: item.id,
                    current: true,
                    initialValues: item.attributes,
                  });
                  setEditorValues(item.attributes);
                }}
              >
                <PencilIcon className="h-4 w-4" />
              </button>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-200 shadow"
                onClick={() => handleDeleteBlock(item.id)}
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="w-full">
              <SortableItem id={item.id}>{item.element}</SortableItem>
            </div>
          </div>
        );
      })}
    </SortableContext>
  );
}
