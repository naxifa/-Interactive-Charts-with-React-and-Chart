

// Creating LineChart component
import React from 'react'; // Import React
import ChartComponent from './ChartComponent'; // Import the reusable ChartComponent

/**
 * LineChart Component
 * Displays a line chart showing monthly profits.
 */
const LineChart = ({ data }) => {
    const chartData = {
        labels: data.months, // X-axis labels (e.g., months)
        datasets: [
            {
                label: 'Monthly Profits', // Name shown in the chart legend
                data: data.profits, // Y-axis values (profits)
                borderColor: 'rgba(54, 162, 235, 1)', // Line color
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Area under the line
                fill: true, // Fill the area under the line
                tension: 0.3, // Smooth curve for the line
            },
        ],
    };

    const options = {
        responsive: true, // Chart adjusts to the container size
        elements: {
            line: { borderWidth: 3 }, // Thickness of the line
            point: { radius: 5, hoverRadius: 7 }, // Size of data points and hover effect
        },
        scales: {
            x: { 
                grid: { display: false }, // No vertical grid lines
            },
            y: { 
                grid: { color: '#E0E0E0' }, // Light gray horizontal grid lines
            },
        },
    };

    return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
