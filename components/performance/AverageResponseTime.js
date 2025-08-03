import DashboardCard from '../DashboardCard';

export default function AverageResponseTime() {
    return (
        <DashboardCard title="Average Response Time" className="flex-1 relative">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="text-4xl font-bold text-black mb-1">250 ms</div>
                    <div className="text-sm text-gray-500">last 24 hours</div>
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                    +15.03%
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14l5-5 5 5z"/>
                    </svg>
                </div>
            </div>
            
            {/* Simple line indicator */}
            <div className="h-8 flex items-center">
                <div className="w-full bg-gray-100 h-0.5 relative">
                    <div className="absolute right-0 top-0 w-1 h-1 bg-blue-600 rounded-full transform -translate-y-0.5"></div>
                </div>
            </div>
        </DashboardCard>
    );
}