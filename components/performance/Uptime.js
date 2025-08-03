import DashboardCard from '../DashboardCard';

export default function Uptime() {
    return (
        <DashboardCard title="Uptime" className="flex-1 relative">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="text-4xl font-bold text-black mb-1">98.9%</div>
                    <div className="text-sm text-gray-500">past 30 days</div>
                </div>
                <div className="flex items-center text-gray-600 text-sm font-medium">
                    -0.03%
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z" />
                    </svg>
                </div>
            </div>
        </DashboardCard>
    );
}