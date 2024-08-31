import React from 'react'
import ServiceBanner from '../../../components/services/single-service/ServiceBanner'
import ServicesSection from "../../../components/services/single-service/ServicesSection"
import OutsourcingPartnerSection from "../../../components/services/single-service/OutsourcingPartnerSection"
import LatestBlogs from '../../../components/home/Latestblog'
import ReviewSection from "../../../components/services/single-service/ReviewSection"
import ResearchContent from "../../../components/services/single-service/Research"

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