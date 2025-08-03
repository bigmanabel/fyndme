import DashboardCard from '../DashboardCard';

export default function SystemUsage() {
    return (
        <DashboardCard title="System Usage" className="flex-1 relative">
            <div className="flex items-center justify-center h-40 mb-6">
                {/* Donut Chart */}
                <div className="relative">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <defs>
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.1"/>
                            </filter>
                        </defs>
                        {/* Background circle */}
                        <circle cx="60" cy="60" r="45" fill="none" stroke="#f3f4f6" strokeWidth="12"/>
                        
                        {/* CPU Usage - Light Blue (55%) */}
                        <circle 
                            cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="#93c5fd" 
                            strokeWidth="12"
                            strokeDasharray="155.51 282.74"
                            strokeDashoffset="0"
                            transform="rotate(-90 60 60)"
                            filter="url(#shadow)"
                        />
                        
                        {/* Memory Usage - Blue (35%) */}
                        <circle 
                            cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="12"
                            strokeDasharray="98.96 282.74"
                            strokeDashoffset="-155.51"
                            transform="rotate(-90 60 60)"
                        />
                        
                        {/* Server - Dark Blue (10%) */}
                        <circle 
                            cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="#1e40af" 
                            strokeWidth="12"
                            strokeDasharray="28.27 282.74"
                            strokeDashoffset="-254.47"
                            transform="rotate(-90 60 60)"
                        />
                    </svg>
                </div>
            </div>
            
            {/* Legend */}
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span>Memory Usage</span>
                    </div>
                    <span className="font-medium">35%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-300 mr-2"></div>
                        <span>CPU Usage</span>
                    </div>
                    <span className="font-medium">55%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-800 mr-2"></div>
                        <span>Server</span>
                    </div>
                    <span className="font-medium">10%</span>
                </div>
            </div>
        </DashboardCard>
    );
}