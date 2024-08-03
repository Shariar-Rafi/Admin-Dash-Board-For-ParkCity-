import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Chart1 from '../components/charts/Chart1'
import Container from '../components/layers/Container'



const Home = () => {


  return (
    <div className='w-full'>
      <Navbar />
      <div className='px-4 lg:px-6'>
        <div className="top">

        </div>

        <div className="chart1">
          <Container>
            <Chart1 />
          </Container>
        </div>
      </div>

    </div>
  )
}

export default Home
