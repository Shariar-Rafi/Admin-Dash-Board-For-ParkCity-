import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Chart1 from '../components/charts/Chart1'
import Container from '../components/layers/Container'
import DashboardCard from '../components/layers/DashboardCard'
import NewCustomerCard from '../components/Dashboard Cards/NewCustomerCard'
import GrowthCard from '../components/Dashboard Cards/GrowthCard'
import NewOrderCard from '../components/Dashboard Cards/NewOrderCard'

const Home = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className='px-4 lg:px-6'>
        <div className="top flex justify-between py-6 flex-wrap">
           <NewCustomerCard/>
           <NewOrderCard/>
           <GrowthCard/>
        </div>

          <Container>
            <Chart1/>
          </Container>
      </div>

    </div>
  )
}

export default Home
