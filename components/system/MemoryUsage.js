"use client";

import DashboardCard from '../DashboardCard';
import { Doughnut } from 'react-chartjs-2';
import '../../lib/chartConfig';

export default function MemoryUsage() {
    const chartData = {
        labels: ['Main Server', 'Other Processes', 'Free Memory'],
        datasets: [
            {
                data: [45, 40, 15],
                backgroundColor: ['#3b82f6', '#93c5fd', '#374151'],
                borderWidth: 0,
                cutout: '60%',
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
        <DashboardCard title="Memory Usage" className="flex-1 relative">
            <div className="flex items-center justify-center h-40 mb-6 mt-[60px]">
                <div className="relative w-32 h-32" style={{ width: '233.734px', height: '233.734px' }}>
                    <Doughnut data={chartData} options={chartOptions} />

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
            <div className="space-y-2 mt-[80px] flex flex-col items-center">
                <div className="flex items-center justify-between text-sm w-full max-w-xs">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span>Main Server</span>
                    </div>
                    <span className="font-medium">45%</span>
                </div>
                <div className="flex items-center justify-between text-sm w-full max-w-xs">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-300 mr-2"></div>
                        <span>Other Processes</span>
                    </div>
                    <span className="font-medium">40%</span>
                </div>
                <div className="flex items-center justify-between text-sm w-full max-w-xs">
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