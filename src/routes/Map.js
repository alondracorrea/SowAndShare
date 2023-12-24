import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Buffer from '../components/Buffer'
import LeafMap from '../components/LeafMap'

const Map = () => {
  return (
    <div>
       <Navbar />
      <Buffer/>
      <LeafMap/>
      <Footer />
    </div>
  )
}

export default Map
