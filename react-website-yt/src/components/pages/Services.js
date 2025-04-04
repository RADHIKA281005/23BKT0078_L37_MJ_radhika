import React from 'react';
 import '../services/Services.css';
;

const servicesData = [
  { title: 'Adventure Trips', description: 'Experience thrilling adventures around the world.', image: '/images/adventure.jpg' },
  { title: 'Luxury Tours', description: 'Enjoy 5-star luxury travel with premium experiences.', image: '/images/luxury.jpg' },
  { title: 'Budget Packages', description: 'Explore amazing destinations without breaking the bank.', image: '/images/budget.jpg' }
];

function Services() {
  return (
    <div className="services-container">
  <div className="service-card">
    <img src="/images/adventure.jpg" alt="Adventure Trips" />
    <h3>Adventure Trips</h3>
    <p>Experience thrilling adventures around the world.</p>
  </div>
  <div className="service-card">
    <img src="/images/luxury.jpg" alt="Luxury Tours" />
    <h3>Luxury Tours</h3>
    <p>Enjoy 5-star luxury travel with premium experiences.</p>
  </div>
  <div className="service-card">
    <img src="/images/budget.jpg" alt="Budget Packages" />
    <h3>Budget Packages</h3>
    <p>Explore amazing destinations without breaking the bank.</p>
  </div>
</div>

  );
}

export default Services;
