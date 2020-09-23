import React from 'react';
import { Link } from 'react-router-dom';

const WidgetList = () => {
  return (
    <div className="widget-list max-width-wrapper -pad-top">
      <div className="promo-grid">
        <Link to="/accordion" className="promo-box">
          Accordion Demo
        </Link>
        <Link to="/inline-alert" className="promo-box">
          Inline Alert Demo
        </Link>
        <Link to="/menu" className="promo-box">
          Menu Demo
        </Link>
        <Link to="/modal" className="promo-box">
          Modal Demo
        </Link>
        <Link to="/styled-form" className="promo-box">
          Styled Form Demo
        </Link>
      </div>
    </div>
  );
};

export default WidgetList;
