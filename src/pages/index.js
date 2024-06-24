import Image from "next/image";
import { League_Spartan } from "next/font/google";
import LayoutDashboard from "./wrapper/layoutDashboard";
import ContentComponent from "@/components/Content";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={leagueSpartan.className}>
      <LayoutDashboard>
        <ContentComponent />
      </LayoutDashboard>
    </div>
  );
}
