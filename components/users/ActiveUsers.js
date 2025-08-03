import DashboardCard from '../DashboardCard';

export default function ActiveUsers() {
    return (
        <DashboardCard title="Active Users" className="flex-1">
            {/* TODO: Add active user metrics here */}
            <div className="text-2xl font-bold text-blue-600">8,456</div>
            <div className="text-sm text-gray-500 mt-1">Currently online</div>
        </DashboardCard>
    );
}
