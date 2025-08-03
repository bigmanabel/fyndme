"use client";

import DashboardCard from '../DashboardCard';
import { Doughnut } from 'react-chartjs-2';
import '../../lib/chartConfig';

export default function SystemUsage() {
    const chartData = {
        labels: ['Memory Usage', 'CPU Usage', 'Server'],
        datasets: [
            {
                data: [35, 55, 10],
                backgroundColor: ['#3b82f6', '#93c5fd', '#1e40af'],
                borderWidth: 0,
                cutout: '70%',
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
                borderColor: '#3B82F6',
                borderWidth: 1,
                callbacks: {
                    label: function (context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            },
        },
    };

    return (
        <DashboardCard title="System Usage" className="flex-1 relative">
            <div className="flex items-center justify-center h-40 mb-6 mt-[10px]">
                <div className="w-32 h-32" style={{ width: '233.734px', height: '233.734px' }}>
                    <Doughnut data={chartData} options={chartOptions} />
                </div>
            </div>
            
            {/* Legend */}
            <div className="space-y-2 mt-[40px] flex flex-col items-center">
                <div className="flex items-center justify-between text-sm w-full max-w-xs">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span>Memory Usage</span>
                    </div>
                    <span className="font-medium">35%</span>
                </div>
                <div className="flex items-center justify-between text-sm w-full max-w-xs">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-300 mr-2"></div>
                        <span>CPU Usage</span>
                    </div>
                    <span className="font-medium">55%</span>
                </div>
                <div className="flex items-center justify-between text-sm w-full max-w-xs">
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