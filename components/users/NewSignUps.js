import DashboardCard from '../DashboardCard';

export default function NewSignUps() {
    return (
        <DashboardCard title="New Sign-Ups" className="flex-1">
            {/* TODO: Add sign-up metrics here */}
            <div className="text-2xl font-bold text-green-600">+1,234</div>
            <div className="text-sm text-gray-500 mt-1">This month</div>
        </DashboardCard>
    );
}
