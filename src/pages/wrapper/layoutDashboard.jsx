import ContentComponent from "@/components/Content";
import HeaderComponent from "@/components/HeaderComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

export default function LayoutDashboard() {
  return (
    <div className="">
      <HeaderComponent />
      <div className="flex w-full border">
        <div className="hidden md:block">
          <SidebarComponent />
        </div>
        <ContentComponent />
      </div>
    </div>
  );
}
