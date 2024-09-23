/* eslint-disable no-unused-vars */
import React from 'react';

const Services = () => {
  const services = [
    { id: 1, name: 'Fresh Cow Milk', description: 'Delivered within 1 hour.' },
    { id: 2, name: 'Almond Milk', description: 'Healthy and fresh.' },
    { id: 3, name: 'Soy Milk', description: 'Organic and fresh.' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map(service => (
        <div key={service.id} className="border p-4 rounded-lg hover:shadow-lg">
          <h3 className="text-xl font-bold mb-2">{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
