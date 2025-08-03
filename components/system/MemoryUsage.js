import DashboardCard from '../DashboardCard';

export default function MemoryUsage() {
    return (
        <DashboardCard title="Memory Usage" className="flex-1">
            {/* TODO: Add memory usage metrics here */}
            <div className="text-2xl font-bold text-purple-600">4.2GB</div>
            <div className="text-sm text-gray-500 mt-1">of 8GB total</div>
        </DashboardCard>
    );
}
