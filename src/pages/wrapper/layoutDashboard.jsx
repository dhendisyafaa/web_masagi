import ContentComponent from "@/components/Content";
import HeaderComponent from "@/components/HeaderComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

export default function LayoutDashboard({ children }) {
  return (
    <div>
      <HeaderComponent />
      <div className="flex w-full">
        <div className="hidden lg:block">
          <SidebarComponent />
        </div>
        {children}
      </div>
    </div>
  );
}
