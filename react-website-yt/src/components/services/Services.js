import React from "react";
import ServiceCard from "../services/ServiceCard";
import PricingTable from "./PricingTable";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        <ServiceCard title="Web Development" description="We build modern and responsive websites." icon="🌍" />
        <ServiceCard title="UI/UX Design" description="Creating stunning and user-friendly designs." icon="🎨" />
        <ServiceCard title="SEO Optimization" description="Boost your website's ranking on search engines." icon="🚀" />
      </div>
      <PricingTable />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Services;
