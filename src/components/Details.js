import React from 'react';

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Details = () => {
  return(
    <section id="details" className="fades">
      <div className="details-wrapper select">
        <div className="detail">
          <div className="icon">
            <FontAwesomeIcon className="detail-icon" icon={['fas', "code"]} />
          </div>
          <h3>Clean</h3>
          <p>Legible code with good structure and comments.</p>
        </div>
        <div className="detail">
          <div className="icon">
            <FontAwesomeIcon className="detail-icon" icon={['fas', "mobile-alt"]} />
          </div>
          <h3>Responsive</h3>
          <p>My focus is on layouts that present well on any device.</p>
        </div>
        <div className="detail">
          <div className="icon">
            <FontAwesomeIcon className="detail-icon" icon={['fas', "sitemap"]} />
          </div>
          <h3>Intuitive</h3>
          <p>Dedicated to creating easy to use, effective UI/UX.</p>
        </div>
        <div className="detail">
          <div className="icon">
            <FontAwesomeIcon className="detail-icon" icon={['fas', "layer-group"]} />
          </div>
          <h3>Full-Stack</h3>
          <p>Focused on React, Node, Express, and SQL</p>
        </div>
      </div>
    </section>
  );
}

export default Details;