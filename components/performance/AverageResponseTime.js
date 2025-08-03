import DashboardCard from '../DashboardCard';

export default function AverageResponseTime() {
    return (
        <DashboardCard title="Average Response Time" className="flex-1">
            {/* TODO: Add response time metrics here */}
            <div className="text-2xl font-bold text-green-600">245ms</div>
            <div className="text-sm text-gray-500 mt-1">Last 24 hours</div>
        </DashboardCard>
    );
}
