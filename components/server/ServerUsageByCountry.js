import DashboardCard from '../DashboardCard';

export default function ServerUsageByCountry() {
    const countries = [
        { name: 'US', value: 85, color: '#8B5CF6' },
        { name: 'Canada', value: 65, color: '#10B981' },
        { name: 'Japan', value: 95, color: '#000000' },
        { name: 'India', value: 90, color: '#3B82F6' },
        { name: 'Mexico', value: 55, color: '#60A5FA' },
        { name: 'Australia', value: 75, color: '#34D399' },
        { name: 'UK', value: 50, color: '#93C5FD' },
        { name: 'France', value: 45, color: '#1E40AF' },
        { name: 'Spain', value: 70, color: '#6B7280' },
        { name: 'Germany', value: 60, color: '#A855F7' },
        { name: 'Italy', value: 55, color: '#10B981' },
        { name: 'South Korea', value: 80, color: '#3B82F6' }
    ];

    return (
        <DashboardCard title="Server Usage By Country" className="w-full mb-[40px]">
            <div className="h-64 flex items-end justify-between px-4 pb-8 relative">
                {/* Y-axis labels would go here */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-2">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                </div>
                
                {/* Bars */}
                <div className="flex items-end justify-between w-full ml-8 space-x-2">
                    {countries.map((country, index) => (
                        <div key={country.name} className="flex flex-col items-center">
                            <div 
                                className="w-8 rounded-t-sm relative"
                                style={{ 
                                    height: `${(country.value / 100) * 180}px`,
                                    backgroundColor: country.color
                                }}
                            />
                            <span className="text-xs text-gray-600 mt-2 transform -rotate-45 origin-top-left">
                                {country.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardCard>
    );
}