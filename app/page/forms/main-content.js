import React from 'react';
import {
  automotive, people, nature, architecture,
} from '../../img';

const MainContent = () => (
  <section className="picture">
    <div className="img first">
      <div className="BlockImg0">
        <p>AUTOMOTIVE</p>
      </div>
      <img src={automotive} alt="img" />
    </div>
    <div className="img second">
      <div className="BlockImg1">
        <p>PEOPLE</p>
      </div>
      <img src={people} alt="img" />
    </div>
    <div className="img third">
      <div className="BlockImg2">
        <p>NATURE</p>
      </div>
      <img src={nature} alt="img" />
    </div>
    <div className="img fourth">
      <div className="BlockImg3">
        <p>ARCHITECTURE</p>
      </div>
      <img src={architecture} alt="img" />
    </div>
  </section>
);

export default MainContent;
