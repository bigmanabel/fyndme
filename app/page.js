import Image from "next/image";
import UserStats from "../components/UserStats";
import AppPerformance from "../components/AppPerformance";
import SystemHealth from "../components/SystemHealth";
import ServerUsage from "../components/ServerUsage";

export default function Home() {
  return (
    <main className="py-20">
      <div className="px-20">
        <h1>Overview</h1>
      </div>

      <div className="my-[63px] p-[1px] px-20">
        <UserStats />
        <AppPerformance />
        <SystemHealth />
        <ServerUsage />
      </div>
    </main>
  );
}
