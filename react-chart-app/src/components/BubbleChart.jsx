
// Creating BubbleChart component

import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Sales, Expenses, and Profits',
                data: data.expenses.map((expense, index) => ({
                    x: expense, // X-axis value: represents monthly expenses
                    y: data.profits[index], // Y-axis value: represents monthly profits
                    r: Math.sqrt(data.sales[index]) / 2, 
                    /* 
                     Bubble size (`r`):
                     - Uses square root of sales for proportional scaling.
                     - Divided by 2 to keep bubble sizes manageable and visually balanced.
                     */
                })),
                backgroundColor: (ctx) => {
                    // Create a radial gradient for bubble colors
                    const gradient = ctx.chart.ctx.createRadialGradient(0, 0, 0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(153, 102, 255, 0.8)'); // Center of the bubble
                    gradient.addColorStop(1, 'rgba(153, 102, 255, 0.2)'); // Outer edge of the bubble
                    return gradient; // Apply gradient to bubble fill
                },
                borderColor: 'rgba(153, 102, 255, 1)', // Solid border for better visibility
            },
        ],
    };

    const options = {
        responsive: true, // Adjusts chart size dynamically to the container
        scales: {
            x: { 
                title: { display: true, text: 'Expenses ($)' }, // X-axis label
                grid: { color: '#E0E0E0' } // Light grid lines for better readability
            },
            y: { 
                title: { display: true, text: 'Profits ($)' }, // Y-axis label
                grid: { color: '#E0E0E0' } // Light grid lines for better readability
            },
        },
    };

    return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
