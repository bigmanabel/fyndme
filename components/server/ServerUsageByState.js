import DashboardCard from '../DashboardCard';

export default function ServerUsageByState() {
    const states = [
        { code: 'AL', value: 45, color: '#93C5FD' },
        { code: 'AK', value: 25, color: '#CBD5E1' },
        { code: 'AZ', value: 35, color: '#E2E8F0' },
        { code: 'AR', value: 70, color: '#3B82F6' },
        { code: 'CA', value: 85, color: '#60A5FA' },
        { code: 'CO', value: 75, color: '#6B7280' },
        { code: 'CT', value: 55, color: '#1E40AF' },
        { code: 'DE', value: 30, color: '#94A3B8' },
        { code: 'FL', value: 40, color: '#64748B' },
        { code: 'GA', value: 90, color: '#1E3A8A' },
        { code: 'HI', value: 35, color: '#E2E8F0' },
        { code: 'ID', value: 30, color: '#F1F5F9' },
        { code: 'IL', value: 25, color: '#CBD5E1' },
        { code: 'IN', value: 65, color: '#3B82F6' },
        { code: 'IA', value: 80, color: '#60A5FA' },
        { code: 'KS', value: 55, color: '#6B7280' },
        { code: 'KY', value: 50, color: '#1E40AF' },
        { code: 'LA', value: 75, color: '#3B82F6' },
        { code: 'ME', value: 60, color: '#64748B' }
    ];

    return (
        <DashboardCard title="Server Usage By State" className="w-full mb-[40px]">
            <div className="h-32 flex items-end justify-between px-4 pb-4 mb-6">
                {/* Bars */}
                <div className="flex items-end justify-between w-full space-x-1">
                    {states.map((state, index) => (
                        <div key={state.code} className="flex flex-col items-center">
                            <div 
                                className="w-6 rounded-t-sm"
                                style={{ 
                                    height: `${(state.value / 100) * 80}px`,
                                    backgroundColor: state.color
                                }}
                            />
                            <span className="text-xs text-gray-600 mt-1">
                                {state.code}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                <span className="text-blue-600 font-medium">1</span>
                <span className="text-gray-400">2</span>
                <span className="text-gray-400">3</span>
                <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </DashboardCard>
    );
}