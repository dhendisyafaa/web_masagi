import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "../ui/input";

export default function FormCreateGroup() {
  const { toast } = useToast();
  return (
    <div className="px-3 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="groupId">Group ID</Label>
        <Input id="groupId" placeholder="The New One" className="rounded-2xl" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="The New One" className="rounded-2xl" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="role">Role</Label>
        <Input id="role" placeholder="The New One" className="rounded-2xl" />
      </div>
      <div className="my-3 flex justify-end">
        <button
          className="rounded-3xl shadow-lg bg-primary px-3 py-2 w-fit"
          onClick={() => {
            toast({
              // description: "Data yang anda masukan GAGAL ditambahkan",
              description: "Data yang anda masukan BERHASIL ditambahkan",
            });
          }}
        >
          <p className="text-white drop-shadow-lg">Create New</p>
        </button>
      </div>
    </div>
  );
}
