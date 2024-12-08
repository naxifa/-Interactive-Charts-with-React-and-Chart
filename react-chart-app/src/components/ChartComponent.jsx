
// Creating the Reusable ChartComponent
import React, { useEffect, useRef } from 'react'; // Import React and its hooks
import Chart from 'chart.js/auto'; // Import Chart.js library

/**
 * Reusable ChartComponent
 * Creates a chart using Chart.js based on the provided type, data, and options.
 */
const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null); // Use this to refer to the canvas element
    let chartInstance = null; // Store the chart instance to manage its lifecycle

    useEffect(() => {
        if (chartRef.current) {
            // Create the chart when the component loads
            chartInstance = new Chart(chartRef.current, {
                type, // Chart type (e.g., 'bar', 'line')
                data, // Data for the chart
                options, // Options to configure the chart
            });
        }

        // Clean up: Destroy the chart when the component is removed or data changes
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [type, data, options]); // Re-run this effect if type, data, or options change

    return <canvas ref={chartRef} />; // The canvas where the chart will be drawn
};

export default ChartComponent;
