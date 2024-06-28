import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "../ui/input";

export default function FormUpdateDashboard() {
  const { toast } = useToast();
  return (
    <div className="px-3 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="dashboardId">Dashboard ID</Label>
        <Input
          id="dashboardId"
          defaultValue="The New One"
          className="rounded-2xl"
          bgColor="bg-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="groupAccess">Group Access</Label>
        <Input
          id="groupAccess"
          defaultValue="The New One"
          className="rounded-2xl"
          bgColor="bg-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="lastUpdated">Last Updated</Label>
        <Input
          id="lastUpdated"
          defaultValue="The New One"
          className="rounded-2xl"
          bgColor="bg-white"
        />
      </div>
      <div className="my-3 flex justify-end">
        <button
          className="rounded-3xl shadow-lg bg-primary px-3 py-2 w-fit"
          onClick={() => {
            toast({
              // description: "Data yang anda masukan GAGAL diubah",
              description: "Data yang anda masukan BERHASIL diubah",
            });
          }}
        >
          <p className="text-white drop-shadow-lg">Save</p>
        </button>
      </div>
    </div>
  );
}
