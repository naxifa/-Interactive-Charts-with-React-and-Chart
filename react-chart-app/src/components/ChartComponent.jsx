
// Creating the Reusable ChartComponent

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null);
    let chartInstance = null;

    useEffect(() => {
        if (chartRef.current) {
            chartInstance = new Chart(chartRef.current, {
                type,
                data,
                options,
            });
        }
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [type, data, options]);

    return <canvas ref={chartRef} />;
};

export default ChartComponent;
