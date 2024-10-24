"use client";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const sliderData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729502580/Khaleeji-Mobile-rt_l8qdvg.png",
    title: "Vala Mobile",
    description: "Tracking financial freedom - Starts with vala",
    country: "Bahrain",
    platforms: ["iOS", "Android"],
    downloads: "10K+",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728556067/d41d8cd98f00b204e9800998ecf8427e.fint_benifit_sec_img_lto1tv.webp",
    title: "Khaleeji Mobile",
    description:
      "Your go-to destination for Banking Information and more. Create an account and get a virtual debit card within a few minutes.",
    country: "Bahrain",
    platforms: ["iOS", "Android"],
    downloads: "10K+",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728556067/d41d8cd98f00b204e9800998ecf8427e.fint_benifit_sec_img_lto1tv.webp",
    title: "Webull Pay",
    description:
      "Manage your Crypto Portfolio in a few steps with market data for several mainstream cryptocurrencies.",
    country: "USA",
    platforms: ["iOS", "Android"],
    downloads: "100K+",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1729502580/Khaleeji-Mobile-rt_l8qdvg.png",
    title: "Vala Mobile",
    description: "Tracking financial freedom - Starts with vala",
    country: "Bahrain",
    platforms: ["iOS", "Android"],
    downloads: "10K+",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728556067/d41d8cd98f00b204e9800998ecf8427e.fint_benifit_sec_img_lto1tv.webp",
    title: "Khaleeji Mobile",
    description:
      "Your go-to destination for Banking Information and more. Create an account and get a virtual debit card within a few minutes.",
    country: "Bahrain",
    platforms: ["iOS", "Android"],
    downloads: "10K+",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728556067/d41d8cd98f00b204e9800998ecf8427e.fint_benifit_sec_img_lto1tv.webp",
    title: "Webull Pay",
    description:
      "Manage your Crypto Portfolio in a few steps with market data for several mainstream cryptocurrencies.",
    country: "USA",
    platforms: ["iOS", "Android"],
    downloads: "100K+",
  },
];

const SliderWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 40px 0;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 20px;
  padding: 0 100px;
`;

const Slide = styled.div`
  flex: 0 0 60%;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: #fff;
  position: relative;
  transform: scale(0.9);
  transition: transform 0.5s ease;
  background: linear-gradient(
    90deg,
    rgba(245, 179, 205, 1) 0%,
    rgba(237, 234, 244, 1) 51%
  );

`;

const Content = styled.div`
  flex: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  color: #666;
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FadedBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60%;
`;

const AppImage = styled.img`
  position: relative;
  z-index: 1;
  max-width: 200px;
  height: auto;
  border-radius: 10px;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ArrowButton = styled.div`
  font-size: 2rem;
  color: #333;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  margin: 0 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  user-select: none;

  &:hover {
    background-color: #000;
    color: #fff;
    transition: background-color 0.3s ease;
  }
`;

const FintechCaseStudy = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = sliderData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1));
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth / 2; // Calculate half of the slider's width to center the active slide

    // Adjust the transform to center the active slide
    slider.style.transform = `translateX(-${(currentIndex) * slideWidth}px)`;

    if (currentIndex > totalSlides) {
      setTimeout(() => {
        slider.style.transition = 'none'; // Disable transition
        setCurrentIndex(1); // Reset to first slide without visible jump
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        slider.style.transition = 'none';
        setCurrentIndex(totalSlides); // Reset to last slide
      }, 500);
    }

    slider.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition after resetting
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth / 2;

    // Duplicate first and last slides for infinite loop effect
    const firstSlide = slider.children[0].cloneNode(true);
    const lastSlide = slider.children[slider.children.length - 1].cloneNode(true);
    slider.appendChild(firstSlide); // Append first slide to the end
    slider.insertBefore(lastSlide, slider.children[0]); // Prepend last slide to the beginning

    // Start with the first slide centered
    slider.style.transform = `translateX(-${(currentIndex) * slideWidth}px)`;
  }, []);

  return (
    <SliderWrapper>
      <SliderContainer ref={sliderRef}>
        {sliderData.map((slide, index) => (
          <Slide key={slide.id} className={currentIndex === index + 1 ? 'active' : ''}>
            <Content>
              <div className="flex items-center gap-2">
                <img src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1729503120/Khaleeji-Mobile_q1jgm0.svg" alt="logo" />
                <Title>{slide.title}</Title>
              </div>
              <Description>{slide.description}</Description>
              <MetaInfo>
                <span>{slide.downloads} Downloads</span>
                <span>{slide.country}</span>
                <span>Platforms: {slide.platforms.join(", ")}</span>
              </MetaInfo>
            </Content>
            <ImageWrapper>
              <FadedBackground />
              <AppImage src={slide.image} alt={slide.title} />
            </ImageWrapper>
          </Slide>
        ))}
      </SliderContainer>

      <ArrowContainer>
        <ArrowButton onClick={handlePrev}>&#8592;</ArrowButton>
        <ArrowButton onClick={handleNext}>&#8594;</ArrowButton>
      </ArrowContainer>
    </SliderWrapper>
  );
};

export default FintechCaseStudy;
