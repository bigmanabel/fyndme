"use client";

import DashboardCard from '../DashboardCard';
import { Bar } from 'react-chartjs-2';
import '../../lib/chartConfig';

export default function ServerUsageByCountry() {
    const chartData = {
        labels: ['US', 'Canada', 'Japan', 'India', 'Mexico', 'Australia', 'UK', 'France', 'Spain', 'Germany', 'Italy', 'South Korea'],
        datasets: [
            {
                data: [85, 65, 95, 90, 55, 75, 50, 45, 70, 60, 55, 80],
                backgroundColor: [
                    '#8B5CF6', '#10B981', '#000000', '#3B82F6',
                    '#60A5FA', '#34D399', '#93C5FD', '#1E40AF',
                    '#6B7280', '#A855F7', '#10B981', '#3B82F6'
                ],
                borderRadius: {
                    topLeft: 4,
                    topRight: 4,
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
                    maxRotation: 45,
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: '#f3f4f6',
                },
                ticks: {
                    stepSize: 25,
                    font: {
                        size: 10,
                    },
                },
            },
        },
    };

    return (
        <DashboardCard title="Server Usage By Country" className="w-full mb-[40px]">
            <div className="h-64">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </DashboardCard>
    );
}