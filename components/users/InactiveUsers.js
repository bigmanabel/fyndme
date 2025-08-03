import DashboardCard from '../DashboardCard';

export default function InactiveUsers() {
    return (
        <DashboardCard title="Inactive Users" className="flex-1 relative">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="text-4xl font-bold text-black mb-1">560</div>
                    <div className="text-sm text-gray-500">last 30 days</div>
                </div>
                <div className="flex items-center text-gray-600 text-sm font-medium">
                    -0.03%
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z"/>
                    </svg>
                </div>
            </div>
            
            {/* Chart placeholder */}
            <div className="h-16 relative mb-4">
                <svg className="w-full h-full" viewBox="0 0 280 60">
                    <defs>
                        <linearGradient id="inactiveUsersGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05"/>
                        </linearGradient>
                    </defs>
                    <path 
                        d="M10,25 Q50,20 90,25 T170,30 Q210,35 250,40 L270,45" 
                        fill="none" 
                        stroke="#8B5CF6" 
                        strokeWidth="2"
                    />
                    <path 
                        d="M10,25 Q50,20 90,25 T170,30 Q210,35 250,40 L270,45 L270,60 L10,60 Z" 
                        fill="url(#inactiveUsersGradient)"
                    />
                    <circle cx="270" cy="45" r="3" fill="#8B5CF6"/>
                </svg>
            </div>
            
            <div className="space-y-1 text-xs text-gray-500">
                <div>Peak Activity: 2,500 users at 8:00 PM</div>
                <div>Lowest Activity: 300 users</div>
                <div>at 4:00 AM</div>
            </div>
        </DashboardCard>
    );
}