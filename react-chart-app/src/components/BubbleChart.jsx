
// Creating BubbleChart component

import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Sales, Expenses, and Profits',
                data: data.expenses.map((expense, index) => ({
                    x: expense,
                    y: data.profits[index],
                    r: Math.sqrt(data.sales[index]) / 2,
                })),
                backgroundColor: (ctx) => {
                    const gradient = ctx.chart.ctx.createRadialGradient(0, 0, 0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(153, 102, 255, 0.8)');
                    gradient.addColorStop(1, 'rgba(153, 102, 255, 0.2)');
                    return gradient;
                },
                borderColor: 'rgba(153, 102, 255, 1)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: { title: { display: true, text: 'Expenses ($)' }, grid: { color: '#E0E0E0' } },
            y: { title: { display: true, text: 'Profits ($)' }, grid: { color: '#E0E0E0' } },
        },
    };

    return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
