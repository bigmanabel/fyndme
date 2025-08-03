"use client";

import DashboardCard from '../DashboardCard';
import { Bar } from 'react-chartjs-2';
import '../../lib/chartConfig';

export default function ServerUsageByState() {
    const chartData = {
        labels: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME'],
        datasets: [
            {
                data: [45, 25, 35, 70, 85, 75, 55, 30, 40, 90, 35, 30, 25, 65, 80, 55, 50, 75, 60],
                backgroundColor: [
                    '#93C5FD', '#CBD5E1', '#E2E8F0', '#3B82F6', '#60A5FA', '#6B7280', '#1E40AF', '#94A3B8',
                    '#64748B', '#1E3A8A', '#E2E8F0', '#F1F5F9', '#CBD5E1', '#3B82F6', '#60A5FA', '#6B7280',
                    '#1E40AF', '#3B82F6', '#64748B'
                ],
                borderRadius: {
                    topLeft: 2,
                    topRight: 2,
                },
                borderSkipped: false,
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
                        return context.label + ': ' + context.parsed.y + '%';
                    }
                }
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                },
            },
            y: {
                display: false,
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return (
        <DashboardCard title="Server Usage By State" className="w-full mb-[40px]">
            <div className="h-32 mb-6">
                <Bar data={chartData} options={chartOptions} />
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