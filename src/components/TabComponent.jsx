import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserManagementTable from "./tables/UserManagementTable";
import GrupManagementTable from "./tables/GrupManagementTable";
import DashboardManagementTable from "./tables/DashboardManagementTable";

export default function TabComponent() {
  return (
    <Tabs defaultValue="user" className="">
      <div className="p-1 rounded-full bg-primary w-fit">
        <TabsList>
          <TabsTrigger value="user">User Management</TabsTrigger>
          <TabsTrigger value="group">Group Management</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard Management</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="user">
        <UserManagementTable />
      </TabsContent>
      <TabsContent value="group">
        <GrupManagementTable />
      </TabsContent>
      <TabsContent value="dashboard">
        <DashboardManagementTable />
      </TabsContent>
    </Tabs>
  );
}
