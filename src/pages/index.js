import Image from "next/image";
import { League_Spartan } from "next/font/google";
import LayoutDashboard from "./wrapper/layoutDashboard";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
  return <LayoutDashboard />;
}
