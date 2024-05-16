import { Service } from "@/types/types";
import Image from "next/image";
import React from "react";

interface ServiceItemProps {
  service: Service;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  // const { iconSrc, title, description } = service;
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
        <Image src={service.icon} width={30} height={30} alt="service" />
      </div>
      <p className="ml-16 text-lg  leading-6 font-bold text-gray-700">
        {service.title}
      </p>
      <p className="mt-2 ml-16 text-base text-gray-500">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceItem;
