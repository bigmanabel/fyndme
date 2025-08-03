import DashboardCard from '../DashboardCard';

export default function InactiveUsers() {
    return (
        <DashboardCard title="Inactive Users" className="flex-1">
            {/* TODO: Add inactive user metrics here */}
            <div className="text-2xl font-bold text-orange-600">2,134</div>
            <div className="text-sm text-gray-500 mt-1">Last 30 days</div>
        </DashboardCard>
    );
}
