import React from 'react'
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend,
    plugins

} from 'chart.js'



ChartJS.register(
    LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend
)


const Chart1 = () => {
    const options = {
        responsive: true,
        aspectRatio:4,
        plugins:{
            legend:{
             display : false,
            },
            title : {
                display: true,
                text: "Revenue is the income that a business has from its normal business activities, usually from the sale of goods and services to customers.",
            },
            
            
        }
    };

    const data = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        datasets: [{
            label: 'Revenue',
            data: [49.33, 61.11, 55.55, 58.1, 54.1, 53.9, 60, 57.55, 58.1, 54.1, 53.9, 56],
            fill: false,
            borderColor: 'rgba(101, 113, 255)',
            tension: 0.01,
            borderWidth: 2,
            hoverBorderWidth: 3,
            
        }]


    };
    return (
        <Line options={options} data={data} className='shadow-md'>

        </Line>
    )
}
export default Chart1
