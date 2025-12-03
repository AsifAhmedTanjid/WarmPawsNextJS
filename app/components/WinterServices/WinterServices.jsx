// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
// import WinterServicesCard from "./winterServicesCard";

import WinterServicesCard from "./WinterServicesCard";


const WinterServices = ({services}) => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {
       services.map(service=>{
          return <WinterServicesCard service={service} key={service.serviceId}></WinterServicesCard>
       })
      }

 </div>
  );
};

export default WinterServices;
