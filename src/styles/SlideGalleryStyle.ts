// SlideGalleryStyles.ts
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Create styled components
export const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 50px 200px;
  background-color: #DDDDDD;
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px; /* Adjust size as needed */
  height: 300px; /* Adjust size as needed */
  border-radius: 10px;

  /* Apply shadow to focused slide */
  &.swiper-slide-active {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); /* Adjust shadow as needed */
  }
`;

export const SwiperImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the slide */
  border-radius: 10px;
`;
