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
                    // Create a vertical gradient for the bar fill color
                    // ctx.chart.ctx provides the CanvasRenderingContext2D object for drawing
                    const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(75, 192, 192, 1)'); // Start color at the top
                    gradient.addColorStop(1, 'rgba(75, 192, 192, 0.2)'); // End color at the bottom (fades out)
                    return gradient; // Return the gradient to be applied as the background
                },
                borderRadius: 5, // Add rounded corners to make the bars visually appealing
            },
        ],
    };

    const options = {
        responsive: true, // Ensure the chart adjusts dynamically to container size
        scales: {
            x: { 
                grid: { 
                    display: false // Hide the vertical grid lines for a cleaner look
                } 
            },
            y: { 
                grid: { 
                    color: '#E0E0E0' // Light gray horizontal grid lines for subtle guidance
                } 
            },
        },
    };

    return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
