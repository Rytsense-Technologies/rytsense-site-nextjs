import React from 'react'
import ServiceBanner from '../../../components/services/single-service/ServiceBanner'
import ServicesSection from "../../../components/services/single-service/ServicesSection"
import OutsourcingPartnerSection from "../../../components/services/single-service/OutsourcingPartnerSection"
import LatestBlogs from '../../../components/home/Latestblog'
import ReviewSection from "../../../components/services/single-service/ReviewSection"
import ResearchContent from "../../../components/services/single-service/Research"

export const metadata = {
  title: "Services - Rytsense Technologies",
  description: "",
  // alternates: {
  //   canonical: "https://rytsensetech.com/software-development-services-usa",
  //   languages: {
  //     "en-us": "https://rytsensetech.com/software-development-services-usa",
  //     "x-default": "https://rytsensetech.com/software-development-services-usa",
  //   },
  // },
};

const page = () => {
  return (
   <>
   <ServiceBanner/>
   <ServicesSection/>
   <OutsourcingPartnerSection/>
   <LatestBlogs/>
   <ReviewSection/>
   <ResearchContent/>
   </>
  )
}

export default page