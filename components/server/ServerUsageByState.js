import DashboardCard from '../DashboardCard';

export default function ServerUsageByState() {
    return (
        <DashboardCard title="Server Usage By State" className="w-full mb-[40px]">
            {/* TODO: Add state usage visualization here */}
            <div className="h-64 flex items-center justify-center text-gray-500">
                State usage chart will go here
            </div>
        </DashboardCard>
    );
}
