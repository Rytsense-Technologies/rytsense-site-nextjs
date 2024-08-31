const Services = ({ services }) => (
    <div className="services">
      {services?.map((service, index) => (
        <div key={index} className="service-item">
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
  
  export default Services;