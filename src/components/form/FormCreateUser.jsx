import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "../ui/input";

export default function FormCreateUser() {
  const { toast } = useToast();
  return (
    <div className="px-3 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="userId">User ID</Label>
        <Input
          id="userId"
          placeholder="The New One"
          className="rounded-2xl"
          bgColor="bg-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="The New One"
          className="rounded-2xl"
          bgColor="bg-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          placeholder="The New One"
          className="rounded-2xl"
          bgColor="bg-white"
        />
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
