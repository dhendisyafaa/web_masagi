import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import Image from "next/image";

export default function SearchBarComponent() {
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger className="items-center justify-center md:w-[525px]">
        <div className="h-8 md:h-10 w-full min-w-40 rounded-[50px] px-3 shadow-[inset_1px_1px_1px_rgba(0,0,0,0.25)] border-none outline-none bg-[#D0DEDF] flex justify-end">
          <Image
            src="/assets/svg/search.svg"
            width={25}
            height={25}
            alt="icon-search"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 md:-mt-14 -mt-10">
        <Input className="" />
        <div className="w-40 md:w-[525px] rounded-xl h-44 items-end flex bg-[#D0DEDF]"></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
