import Image from "next/image";

export default function Home() {
  return (
    <main className="p-20">
      <h1 className="text-3xl/[140%] text-[#2E2A2A] font-[600] ">Overview</h1>

      <h3 className="text-[20px] text-[#000000] font-[600]">Users</h3>
      {/* New Sign-Ups */}
      {/* Active Users */}
      {/* Inactive Users */}
      <h3 className="text-[20px] text-[#000000] font-[600]">App Performance</h3>
      {/* Average Response Time */}
      {/* Error Rate */}
      {/* Uptime */}
      <h3 className="text-[20px] text-[#000000] font-[600]">System Health</h3>
      {/* System Usage */}
      {/* Memory Usage */}
      {/* Server Usage By Country */}
      {/* Server Usage By State */}
  </main>
  );
}
