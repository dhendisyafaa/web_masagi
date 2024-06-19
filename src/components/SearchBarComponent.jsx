import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

export default function SearchBarComponent() {
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger className="items-center justify-center md:w-[525px]">
        <Input className="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[525px] rounded-xl h-44 items-end flex"></DropdownMenuContent>
    </DropdownMenu>
  );
}
