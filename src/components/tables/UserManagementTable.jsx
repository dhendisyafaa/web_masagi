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
import FormCreateUser from "../form/FormCreateUser";
import FormUpdateUser from "../form/FormUpdateUser";
import DialogDelete from "../dialog/DialogDelete";

export default function UserManagementTable() {
  const tableHead = ["No", "User ID", "Name", "Role", "Edit"];
  const dataTable = [
    {
      no: 1,
      userId: "userid01",
      name: "Name 1",
      role: "role01",
    },
    {
      no: 2,
      userId: "userid02",
      name: "Name 2",
      role: "role02",
    },
    {
      no: 3,
      userId: "userid03",
      name: "Name 3",
      role: "role03",
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
              <DialogTitle>MAKE A NEW USER</DialogTitle>
            </DialogHeader>
            <FormCreateUser />
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
              <TableCell>{data.userId}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.role}</TableCell>
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
                        <DialogTitle>EDIT USER</DialogTitle>
                      </DialogHeader>
                      <FormUpdateUser />
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
