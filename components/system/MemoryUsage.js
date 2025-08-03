import DashboardCard from '../DashboardCard';

export default function MemoryUsage() {
    return (
        <DashboardCard title="Memory Usage" className="flex-1 relative">
            <div className="flex items-center justify-center h-40 mb-6">
                {/* Donut Chart with center text */}
                <div className="relative">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <defs>
                            <filter id="memoryShadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.1"/>
                            </filter>
                        </defs>
                        {/* Background circle */}
                        <circle cx="60" cy="60" r="45" fill="none" stroke="#f3f4f6" strokeWidth="12"/>
                        
                        {/* Other Processes - Light Blue (40%) */}
                        <circle 
                            cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="#93c5fd" 
                            strokeWidth="12"
                            strokeDasharray="113.1 282.74"
                            strokeDashoffset="0"
                            transform="rotate(-90 60 60)"
                            filter="url(#memoryShadow)"
                        />
                        
                        {/* Main Server - Blue (45%) */}
                        <circle 
                            cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="12"
                            strokeDasharray="127.23 282.74"
                            strokeDashoffset="-113.1"
                            transform="rotate(-90 60 60)"
                        />
                        
                        {/* Free Memory - Dark Gray (15%) */}
                        <circle 
                            cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="#374151" 
                            strokeWidth="12"
                            strokeDasharray="42.41 282.74"
                            strokeDashoffset="-240.33"
                            transform="rotate(-90 60 60)"
                        />
                    </svg>
                    
                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-black">85%</div>
                        <div className="text-xs text-gray-500 text-center">
                            <div>85GB out of</div>
                            <div>100GB</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Legend */}
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span>Main Server</span>
                    </div>
                    <span className="font-medium">45%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-300 mr-2"></div>
                        <span>Other Processes</span>
                    </div>
                    <span className="font-medium">40%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-700 mr-2"></div>
                        <span>Free Memory</span>
                    </div>
                    <span className="font-medium">15%</span>
                </div>
            </div>
        </DashboardCard>
    );
}