import React from 'react';
import './Statistics.css';

const Statistics = () => {
  return (
    <div className='footer-container'>
    <div className='main-footera'>
    <div className='containera'>
      <div className='rowa'>
        {/* column1 */}
        <div className='footer-columna'>
          <h3>1 in 4</h3>
         <p>1 in 4 women and 1 in 9 men experience severe intimate partner physical violence, intimate partner contact sexual violence, and/or intimate partner stalking with impacts such as injury, fearfulness, post-traumatic stress disorder,</p>
        </div>
        {/* column2 */}
        <div className='footer-columna'>
          <h3>43%</h3>
          <p>A recent Australian survey shows that 41% of lesbians and 28% of gay men have experienced abuse within a romantic relationship</p>
        </div>
        {/* column3 */}
        <div className='footer-column2a'>
          <h3>50%</h3>
          <p>
           of adults with disability have experienced violence after the age of 15
          </p>
        </div>
        {/*column 4*/}
        <div className='footer-column3a'>
          <h3>1 in 2</h3>
          <p>
           of transgender individuals are sexually abused or assaulted at some point in their lives
          </p>
          </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Statistics;
