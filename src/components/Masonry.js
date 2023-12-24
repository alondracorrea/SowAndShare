import './Masonry.css';
import { Link } from 'react-router-dom';
import React from 'react';
import quoteImage from '../assets/quote1.jpg';
import quoteImage1 from '../assets/quote2.jpg'
import quoteImage2 from '../assets/quote3.jpg'
import quoteImage3 from '../assets/quote4.jpg'
import quoteImage4 from '../assets/quote5.jpg'
import quoteImage5 from '../assets/quote6.jpg'
import quoteImage6 from '../assets/quote7.jpg'
import quoteImage7 from '../assets/quote8.jpg'
import quoteImage8 from '../assets/quote8.jpg'
import quoteImage9 from '../assets/quote9.jpg';
import quoteImage10 from '../assets/quote10.jpg';
import quoteImage11 from '../assets/quote11.jpg';
import quoteImage12 from '../assets/quote12.jpg';
import quoteImage13 from '../assets/quote13.jpg';
import quoteImage14 from '../assets/quote14.jpg';
import quoteImage15 from '../assets/quote15.jpg';
import quoteImage16 from '../assets/quote16.jpg';

const Masonry = () => {
  return (

<div className="pin_container">
    <div className="card card_small">
    <img src={quoteImage} alt="hi" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
    <div className="card card_medium">
    <img src={quoteImage6} alt="hi" style={{ maxWidth: '100%', height: '100%' }} />
    </div>
    <div className="card card_large">
    <img src={quoteImage8} alt="hi" style={{ maxWidth: '100%', height: '100%' }} />
    </div>
    <div className="card card_medium">
    <img src={quoteImage5} alt="" style={{ width: '100%', height: '100%' }} />
    </div>
    <div className="card card_small">
    <img src={quoteImage1} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
    <div className="card card_large">
    <img src={quoteImage3} alt="" style={{ maxWidth: '100%', height: '100%' }} />
    </div>
    <div className="card card_medium">
    <img src={quoteImage2} alt="" style={{ width: '100%', height: '100%' }} />
    </div>
    <div className="card card_small">
    <img src={quoteImage15} alt = "" style ={{width: '100%', height: '100%'}}/>
    </div>
    <div className="card card_medium">
    <img src={quoteImage7} alt="" style={{ width: '100%', height: '100%' }} />
    </div>
    <div className="card card_small">
    <img src={quoteImage13} alt = "" style ={{width: '100%', height: '100%'}}/>
    </div>
    <div className="card card_medium">
    <img src={quoteImage14} alt = "" style ={{width: '100%', height: '100%'}}/>
    </div>
    <div className="card card_large">
    <img src={quoteImage4} alt="" style={{ width: '100%', height: '100%' }} />
    </div>
    <div className="card card_medium">
      <img src={quoteImage10} alt = "" style ={{width: '100%', height: '100%'}}/>
    </div>
    <div className="card card_small">
    <img src={quoteImage11} alt = "" style ={{width: '100%', height: '100%'}}/>
    </div>
    <div className="card card_medium">
    <img src={quoteImage16} alt = "" style ={{width: '100%', height: '100%'}}/>
    </div>
    <div className="card card_large">
    <img src={quoteImage12} alt = "" style ={{width: '100%', height: '100%'}}/>
    </div>
</div>


  )
}

export default Masonry
