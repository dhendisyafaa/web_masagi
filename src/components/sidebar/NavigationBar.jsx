import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function NavigationBar() {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={cn(
          "bg-primary hover:bg-[#D0DEDF]/50 cursor-pointer flex gap-2 text-white items-center text-xl duration-150 rounded-tl-xl rounded-bl-xl p-2"
        )}
      >
        <Image
          src={"/assets/svg/account.svg"}
          width={30}
          height={30}
          alt="account-settings-logo"
        />
        <p>Account & Role Settings</p>
      </div>
      <div
        className={cn(
          "bg-primary hover:bg-[#D0DEDF]/50 cursor-pointer flex gap-2 text-white items-center text-xl duration-150 rounded-tl-xl rounded-bl-xl p-2"
        )}
      >
        <Image
          src={"/assets/svg/gear.svg"}
          width={30}
          height={30}
          alt="account-settings-logo"
        />
        <p>Connection Settings</p>
      </div>
    </div>
  );
}
// 184 20% 48%
// 184 19% 66%
