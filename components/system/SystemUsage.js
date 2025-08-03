import DashboardCard from '../DashboardCard';

export default function SystemUsage() {
    return (
        <DashboardCard title="System Usage" className="flex-1">
            {/* TODO: Add system usage metrics here */}
            <div className="text-2xl font-bold text-yellow-600">67%</div>
            <div className="text-sm text-gray-500 mt-1">CPU & Disk usage</div>
        </DashboardCard>
    );
}
