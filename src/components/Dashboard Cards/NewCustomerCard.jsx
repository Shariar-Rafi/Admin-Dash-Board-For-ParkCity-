import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend,
    plugins,
    Ticks

} from 'chart.js'
import { scales } from 'chart.js';

const NewCustomerCard = () => {

    let [CustomerGrowthNumber, setCustomerGrowthNumber] = useState(-3.3);
    let [Customer, setCustomer] = useState(3897);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,

            },
            title: {
                display: false,
                text: "",
            },
        },
        scales: {
            x: {
                ticks: {
                    display: false // Hides only the labels of the x-axis 
                }
            },
            y: {
                ticks: {
                    display: false // Hides only the labels of the x-axis 
                }
            }
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
            // label: 'Revenue',
            data: [49.33, 61.11, 55.55, 58.1, 54.1, 53.9, 60, 57.55, 58.1, 54.1, 53.9, 56],
            fill: false,
            borderColor: ' rgba(101, 113, 255)',
            tension: 0.01,
            borderWidth: 1,

        }]


    };
    return (
        <div className='w-[576px] h-[138px] shadow-md flex p-6 items-center justify-around'>
            <div className="left flex flex-col  gap-y-2" >
                <h2 className='text-[#0c0c0c] text-sm uppercase' >New Customers</h2>
                <p className='text-[#0c0c0c] text-2xl'>{Customer}</p>
                <div className='flex gap-x-2 items-center'>
                    <p className={`${CustomerGrowthNumber>0?"text-[#1EB900]":"text-[#D90000]"} text-sm`} >{CustomerGrowthNumber}%</p>
                    <FaArrowUp className={`${CustomerGrowthNumber>0?"text-[#1EB900]":"text-[#D90000] rotate-180"} text-xs mb-1`} />
                </div>
            </div>

            <div className="right chart-container relative h-[10vh]">
                <Line options={options} data={data} id='chart' />
            </div>
        </div>
    )
}

export default NewCustomerCard
