

// Creating ScatterChart component

import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Expenses vs. Profits',
                data: data.expenses.map((expense, index) => ({
                    x: expense,
                    y: data.profits[index],
                })),
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                pointStyle: 'triangle',
                pointRadius: 8,
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

    return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;


