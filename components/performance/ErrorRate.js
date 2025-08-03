import DashboardCard from '../DashboardCard';

export default function ErrorRate() {
    return (
        <DashboardCard title="Error Rate" className="flex-1">
            {/* TODO: Add error rate metrics here */}
            <div className="text-2xl font-bold text-red-600">0.02%</div>
            <div className="text-sm text-gray-500 mt-1">Last 24 hours</div>
        </DashboardCard>
    );
}
