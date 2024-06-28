import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import Image from "next/image";
import SearchBarComponent from "../SearchBarComponent";
import FormCreateDashboard from "../form/FormCreateDashboard";
import FormUpdateDashboard from "../form/FormUpdateDashboard";
import DialogDelete from "../dialog/DialogDelete";

export default function DashboardManagementTable() {
  const tableHead = [
    "No",
    "Dashboard Name",
    "Group Access",
    "Last Updated",
    "Edit",
  ];
  const dataTable = [
    {
      no: 1,
      dashboardName: "Finance Dashboard",
      groupAccess: "Finance Team, Executives",
      lastUpdated: "2024-05-06",
    },
    {
      no: 2,
      dashboardName: "HR Dashboard",
      groupAccess: "HR Team",
      lastUpdated: "2024-05-06",
    },
    {
      no: 3,
      dashboardName: "Marketing Dashboard",
      groupAccess: "Marketing Team",
      lastUpdated: "2024-05-06",
    },
  ];

  return (
    <div className="min -w-full p-3 bg-primary rounded-3xl">
      <div className="flex justify-between mb-2 gap-3">
        <SearchBarComponent />
        <Dialog>
          <DialogTrigger className="flex items-center gap-2 rounded-3xl shadow-lg bg-[#99B7B9] px-3 py-2 w-fit">
            <Plus className="hidden md:block text-primary bg-white rounded-full w-5 h-5 shadow-md" />
            <p className="text-xs md:text-base text-white drop-shadow-lg">
              Create New
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>MAKE A NEW DASHBOARD</DialogTitle>
            </DialogHeader>
            <FormCreateDashboard />
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableCaption>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TableCaption>
        <TableHeader>
          <TableRow>
            {/* <div className="w-full rounded-3xl overflow-hidden"></div> */}
            {tableHead.map((item, i) => (
              <TableHead key={i}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataTable.map((data) => (
            <TableRow key={data.no}>
              <TableCell>{data.no}</TableCell>
              <TableCell>{data.dashboardName}</TableCell>
              <TableCell>{data.groupAccess}</TableCell>
              <TableCell>{data.lastUpdated}</TableCell>
              <TableCell>
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <Dialog>
                    <DialogTrigger>
                      <Image
                        src="/assets/svg/edit.svg"
                        height={25}
                        width={25}
                        alt="edit"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>EDIT DASHBOARD</DialogTitle>
                      </DialogHeader>
                      <FormUpdateDashboard />
                    </DialogContent>
                  </Dialog>
                  <DialogDelete />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
