import ServiceItem from "@/components/ServiceItem";
import { Service } from "@/types/types";
import Image from "next/image";
import React from "react";

const services: Service[] = [
  {
    icon: "https://www.svgrepo.com/show/503163/api-settings.svg",
    title: "Powerful API",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    icon: "https://www.svgrepo.com/show/503138/webpack.svg",
    title: "Easy to integrate SDK",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    icon: "https://www.svgrepo.com/show/511771/dashboard-671.svg",
    title: "Low Transaction Cost",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    icon: "https://www.svgrepo.com/show/76267/free-commercial-label.svg",
    title: "Powerful Dashboard",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
];

const ServicePage = () => {
  return (
    <div className="my-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
            Why choose us?
          </h2>
          <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            We know tech, we know finance. We are fintech experts.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            We know how to handle taxation for all the countried we operate in.
            We care for our customers and help them manage cashflows.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* services card */}
            {services.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
