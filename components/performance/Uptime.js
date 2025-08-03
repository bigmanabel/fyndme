import DashboardCard from '../DashboardCard';

export default function Uptime() {
    return (
        <DashboardCard title="Uptime" className="flex-1">
            {/* TODO: Add uptime metrics here */}
            <div className="text-2xl font-bold text-green-600">99.9%</div>
            <div className="text-sm text-gray-500 mt-1">Last 30 days</div>
        </DashboardCard>
    );
}
