import DashboardCard from '../DashboardCard';

export default function NewSignUps() {
    return (
        <DashboardCard title="New Sign-Ups" className="flex-1 relative">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="text-4xl font-bold text-black mb-1">120</div>
                    <div className="text-sm text-gray-500">last 24 hours</div>
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                    +15.03%
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14l5-5 5 5z" />
                    </svg>
                </div>
            </div>

            {/* Chart placeholder */}
            <div className="h-16 relative mb-4">
                <svg className="w-full h-full" viewBox="0 0 280 60">
                    <defs>
                        <linearGradient id="newSignUpsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M10,45 Q50,40 90,35 T170,25 Q210,20 250,15 L270,10"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="2"
                    />
                    <path
                        d="M10,45 Q50,40 90,35 T170,25 Q210,20 250,15 L270,10 L270,60 L10,60 Z"
                        fill="url(#newSignUpsGradient)"
                    />
                    <circle cx="270" cy="10" r="3" fill="#8B5CF6" />
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
