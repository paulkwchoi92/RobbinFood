import React from 'react';

import { Link } from 'react-router-dom'
const RootFeatBox = () => (
  <div className="drpdown drpdownfnc">
    <ul>
      <li><Link to="/snacks" className="dpdcont">Snacks</Link></li>
      <li><Link to="/blog" className="dpdcont">Blog</Link></li>
      <li><Link to="/help" className="dpdcont">Help</Link></li>
      <li><Link to="/careers" className="dpdcont">Careers</Link></li>

    </ul>
  </div>
)

export default RootFeatBox