import React, { useState, useEffect } from 'react';
import './App.css';
import financialData from './assets/financial_data.json'; // Import the JSON file
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
    const [chartData, setChartData] = useState(null); // State to store the financial data
    const [loading, setLoading] = useState(true);     // State to track loading status

    // Load the financial data when the component mounts
    useEffect(() => {
        setChartData(financialData); // Set the financial data to chartData state
        setLoading(false);           // Update loading state to false
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Show a loading message while the data is being loaded
    if (loading) return <p>Loading charts...</p>;

    return (
        <div className="dashboard">
            <h1>Financial Data Dashboard</h1>
            <div className="chart-grid">
                <div className="chart-item"><BarChart data={chartData} /></div>
                <div className="chart-item"><LineChart data={chartData} /></div>
                <div className="chart-item"><ScatterChart data={chartData} /></div>
                <div className="chart-item"><BubbleChart data={chartData} /></div>
            </div>
        </div>
    );
};

export default App;
