import React from 'react'
import Navbar from '../components/Navbar'
import PeopleImage from '../components/PeopleImage';
import Footer from '../components/Footer'
import Content from '../components/Content'
import Map_Content from '../components/Map_Content';
import Statistics from '../components/Statistics';
import Slideshow from '../components/Slideshow';
const Home = () => {
  return (
    <div>
      <Navbar />
      <PeopleImage heading='You are never alone.' text='Share your story.'/>
      <Content />
      <Map_Content />
      <Statistics />
      <Slideshow />
      <Footer />
    </div>
  );
}

export default Home
