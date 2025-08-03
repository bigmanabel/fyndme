import DashboardCard from '../DashboardCard';

export default function ServerUsageByCountry() {
    return (
        <DashboardCard title="Server Usage By Country" className="w-full mb-[40px]">
            {/* TODO: Add country usage visualization here */}
            <div className="h-64 flex items-center justify-center text-gray-500">
                Country usage chart will go here
            </div>
        </DashboardCard>
    );
}
