import Image from "next/image";

export default function Home() {
  return (
    <main className="p-20">
      <h1>Overview</h1>

      <div className="my-[63px] p-[1px]">
        <h3 className="-mt-[28px]">Users</h3>
        <div className="flex w-full gap-4">
          {/* New Sign-Ups */}
          <div className="card flex-1">
            New Sign-Ups
          </div>
          {/* Active Users */}
          <div className="card flex-1">
            Active Users
          </div>
          {/* Inactive Users */}
          <div className="card flex-1">
            Inactive Users
          </div>
        </div>
        <h3>App Performance</h3>
        <div className="flex w-full gap-4">
          {/* Average Response Time */}
          <div className="card flex-1">
            Average Response Time
          </div>
          {/* Error Rate */}
          <div className="card flex-1">
            Error Rate
          </div>
          {/* Uptime */}
          <div className="card flex-1">
            Uptime
          </div>
        </div>

        <h3 className="pt-[67px]">System Health</h3>
        <div className="flex w-full gap-4 mb-[40px]">
          {/* System Usage */}
          <div className="card flex-1">
            System Usage
          </div>
          {/* Memory Usage */}
          <div className="card flex-1">
            Memory Usage
          </div>
        </div>
        {/* Server Usage By Country */}
        <div className="card w-full mb-[40px]">
          Server Usage By Country
        </div>
        {/* Server Usage By State */}
        <div className="card w-full mb-[40px]">
          Server Usage By State
        </div>
      </div>
    </main>
  );
}
