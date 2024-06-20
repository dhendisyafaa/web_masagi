import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3">
      <Link
        href="/"
        className={cn(
          "hover:bg-[#D0DEDF]/50 cursor-pointer flex gap-2 text-white items-center text-xl duration-150 rounded-tl-xl rounded-bl-xl p-2",
          pathname === "/" ? "bg-[#D0DEDF]/50" : "bg-primary"
        )}
      >
        <Image
          src={"/assets/svg/account.svg"}
          width={30}
          height={30}
          alt="account-settings-logo"
        />
        <p>Account & Role Settings</p>
      </Link>
      <Link
        href="/connection-settings"
        className={cn(
          "bg-primary hover:bg-[#D0DEDF]/50 cursor-pointer flex gap-2 text-white items-center text-xl duration-150 rounded-tl-xl rounded-bl-xl p-2",
          pathname === "/connection-settings" ? "bg-[#D0DEDF]/50" : "bg-primary"
        )}
      >
        <Image
          src={"/assets/svg/gear.svg"}
          width={30}
          height={30}
          alt="account-settings-logo"
        />
        <p>Connection Settings</p>
      </Link>
    </div>
  );
}
// 184 20% 48%
// 184 19% 66%
