
// Creating Bar Chart component

import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.sales,
                backgroundColor: (ctx) => {
                    const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(75, 192, 192, 1)');
                    gradient.addColorStop(1, 'rgba(75, 192, 192, 0.2)');
                    return gradient;
                },
                borderRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: '#E0E0E0' } },
        },
    };

    return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
