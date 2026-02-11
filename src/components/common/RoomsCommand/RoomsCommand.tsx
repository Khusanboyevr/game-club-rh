"use client";

import * as React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Edit, Timer, Trash2 } from "lucide-react";
import { DeleteItem } from "../DeleteItem/DeleteItem";

type props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  roomId: string;
};

export function RoomsCommand({ open, setOpen, roomId }: props) {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const handleClickDelete = () => {
    setShowDeleteModal(true);
    setOpen(false);
  };
  return (
    <div className="flex flex-col gap-4">
      <DeleteItem open={showDeleteModal} setOpen={setShowDeleteModal} roomId={roomId} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandList>
            <CommandEmpty>Natija topilmadi!</CommandEmpty>
            <CommandGroup heading="Sessiyalar">
              <CommandItem>
                <Timer />
                <span>Boshlash Vaqti</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <Edit />
                <span>Xonani Tahrirlash</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={handleClickDelete} className="bg-red-200! hover:bg-red-300! text-red-500 hover:!text-red-600 transition-colors hover:bg-red-50 hover:text-white hover:cursor-pointer ">
                <Trash2 className="text-red-500 hover:!text-red-600 transition-colors hover:bg-red-50 hover:text-white hover:cursor-pointer hover:opacity-80 hover:scale-105 hover:z-10 hover:translate-y-[-2px]" />
                <span>Xonani O'chirish</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
