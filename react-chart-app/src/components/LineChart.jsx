

// Creating LineChart component

import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Profits',
                data: data.profits,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        elements: {
            line: { borderWidth: 3 },
            point: { radius: 5, hoverRadius: 7 },
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: '#E0E0E0' } },
        },
    };

    return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
