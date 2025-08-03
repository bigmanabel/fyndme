"use client";

import DashboardCard from '../DashboardCard';
import { Line } from 'react-chartjs-2';
import '../../lib/chartConfig';

export default function NewSignUps() {
    const chartData = {
        labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM', '12AM'],
        datasets: [
            {
                label: 'New Sign-Ups',
                data: [20, 30, 45, 60, 80, 110, 120],
                fill: true,
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderColor: '#8B5CF6',
                borderWidth: 2,
                pointBackgroundColor: '#8B5CF6',
                pointBorderColor: '#8B5CF6',
                pointRadius: 0,
                pointHoverRadius: 6,
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'white',
                bodyColor: 'white',
                borderColor: '#8B5CF6',
                borderWidth: 1,
            },
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
                min: 0,
                max: 150,
            },
        },
        elements: {
            point: {
                hoverRadius: 6,
            },
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
    };

    return (
        <DashboardCard title="New Sign-Ups" className="flex-1 relative">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="text-2xl font-[500] text-black mb-1">120</div>
                    <div className="text-[12px] font-[400] text-black">last 24 hours</div>
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                    +15.03%
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14l5-5 5 5z" />
                    </svg>
                </div>
            </div>

            {/* Real Chart */}
            <div className="h-32 relative mb-[26px] w-full" style={{ height: '127px' }}>
                <Line data={chartData} options={chartOptions} />
            </div>

            <div className="flex">
                <div className="space-y-1 text-xs font-medium" style={{ color: '#767676' }}>
                    <div>Peak Activity: 2,500 users at 8:00 PM</div>
                </div>
            </div>
            
            <div className="flex mt-2">
                <div className="space-y-1 text-xs font-medium" style={{ color: '#767676' }}>
                    <div>Lowest Activity: 300 users</div>
                    <div>at 4:00 AM</div>
                </div>
            </div>
        </DashboardCard>
    );
}
