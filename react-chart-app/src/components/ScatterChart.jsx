

// Creating ScatterChart component

import React from 'react'; // Import React
import ChartComponent from './ChartComponent'; // Import the reusable ChartComponent

/**
 * ScatterChart Component
 * Displays a scatter plot to compare expenses and profits.
 */
const ScatterChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Expenses vs. Profits', // Legend label for the scatter plot
                data: data.expenses.map((expense, index) => ({
                    x: expense, // X-axis: monthly expenses
                    y: data.profits[index], // Y-axis: corresponding monthly profits
                })),
                backgroundColor: 'rgba(255, 99, 132, 0.7)', // Color for the data points
                pointStyle: 'triangle', // Points are displayed as triangles
                pointRadius: 8, // Size of each point on the chart
            },
        ],
    };

    const options = {
        responsive: true, // Adjusts chart size to fit the container
        scales: {
            x: { 
                title: { display: true, text: 'Expenses ($)' }, // Label for the X-axis
                grid: { color: '#E0E0E0' }, // Light gray grid lines for the X-axis
            },
            y: { 
                title: { display: true, text: 'Profits ($)' }, // Label for the Y-axis
                grid: { color: '#E0E0E0' }, // Light gray grid lines for the Y-axis
            },
        },
    };

    return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;
