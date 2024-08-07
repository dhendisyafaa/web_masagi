import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import SearchBarComponent from "./SearchBarComponent";
import SidebarComponent from "./SidebarComponent";

export default function HeaderComponent() {
  return (
    <header className="flex items-center justify-between md:px-10 md:py-3 px-3 py-5">
      <Image
        src={"/assets/img/logo.png"}
        width={200}
        height={200}
        className="hidden lg:block"
        alt="logo"
      />
      {/* <Image
        src={"/assets/img/logo-small.png"}
        width={50}
        height={50}
        className="lg:hidden"
        alt="logo"
      /> */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-primary" />
          </SheetTrigger>
          <SheetContent side="left">
            <SidebarComponent />
          </SheetContent>
        </Sheet>
      </div>
      <SearchBarComponent />
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={"/assets/svg/notification.svg"}
              height={30}
              width={30}
              alt="notification"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60 h-44 items-end flex bg-[#D0DEDF] mt-0">
            <div className="border-t-2 border-primary w-full text-end p-1">
              <p className="text-[10px]">Mark all as read</p>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarImage src="/assets/img/avatar.png" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <ChevronDown className="text-primary h-5 w-5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#D0DEDF] mt-0">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
