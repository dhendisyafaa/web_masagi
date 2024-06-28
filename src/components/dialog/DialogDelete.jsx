import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DialogDelete() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Image
          src="/assets/svg/delete.svg"
          height={25}
          width={25}
          alt="delete"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Anda yakin ingin menghapus data ini?</DialogTitle>
          <DialogDescription>
            Data yang telah dihapus tidak bisa dikembalikan. Data akan dihapus
            secara permanen dari akun anda dan dari server kami
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end items-center gap-2">
          <Button size={"sm"} variant="" onClick={() => setOpen(false)}>
            NO
          </Button>
          <Button
            size={"sm"}
            variant="destructive"
            onClick={() => {
              toast({
                // description: "Data yang anda pilih GAGAL dihapus",
                description: "Data yang anda pilih BERHASIL dihapus",
              });
            }}
          >
            YES
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
