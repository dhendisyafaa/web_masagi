import React from "react";
import NavigationBar from "./sidebar/NavigationBar";

export default function SidebarComponent() {
  return (
    <div className="w-[320px] h-screen pl-10 py-10 bg-primary text-primary-foreground rounded-tr-3xl">
      <div className="flex flex-col gap-3">
        <p className="text-xl">Welcome back,</p>
        <p className="text-xl font-bold">Genta Alima Persada</p>
        <hr />
      </div>
      <div className="mt-12">
        <NavigationBar />
      </div>
    </div>
  );
}
