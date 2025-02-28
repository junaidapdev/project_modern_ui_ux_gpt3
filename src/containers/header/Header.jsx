import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text_title">codemarch.co</h1>
      <h1 className="gradient__text">Let&apos;s Start Learning <br /> JavaScript & React <br /> in Depth.</h1>
      <p>COMING SOON</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Notify Me</button>
      </div> */}

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    {/* <div className="gpt3__header-image">
      <img src={ai} />
    </div> */}
  </div>
);

export default Header;
