import styled from "styled-components";
import { colors } from '@/styles/theme';
import { SwiperSlide } from "swiper/react";

export const CatalogContainer = styled.div`
  padding-top: 2.5rem; 
  padding-bottom: 2.5rem;
  padding-left: 1.25rem; 
  padding-right: 1.25rem;
  max-width: 72rem; 
  margin-left: auto;
  margin-right: auto;
  font-family: sans-serif;

`;

export const Header = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem; 
  gap: 1rem; 
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center; 
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 500; 
  color: ${colors.gray800};

  @media (min-width: 768px) {
    font-size: 3rem; 
    line-height: 1;
  }
`;

export const ViewAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.5rem;
  border: 1px solid ${colors.gray300}; 
  border-radius: 9999px;
  background-color: ${colors.white};
  color: ${colors.gray800};
  font-size: 1rem; 
  transition: background-color 200ms ease-in-out; 
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: ${colors.gray100}; 
  }
  @media (min-width: 640px) {
    align-self: auto; 
  }

  svg {
    margin-left: 0.5rem; 
    width: 1em; 
    height: 1em;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  gap: 1.5rem; 
  margin-bottom: 50px;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
  }
  `;

export const Card = styled.div`
  position: relative; 
  background-color: ${colors.gray100};
  border-radius: 1rem; 
  padding: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px; 
  overflow: hidden; 
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  cursor: pointer;
  background-color: ${colors.light};
  
  &:hover {
    transform: translateY(-4px); 
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); 
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-bottom: 1rem;
  position: relative; 
  z-index: 10; 
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem; 
  line-height: 1.75rem;
  font-weight: 600; 
  color: ${colors.gray800};
  margin-bottom: 0.5rem; 
`;

export const CardPrice = styled.span`
  font-size: 1rem; 
  color: ${colors.gray600};
  display: flex;
  align-items: center;
  margin-top: auto;

  svg {
    margin-left: 0.375rem; 
    width: 0.8em; 
    height: 0.8em;
    opacity: 0.7; 
  }
`;

export const CardImageWrapper = styled.div`
  position: absolute; 
  right: 1rem; 
  bottom: 0rem;
  width: 50%; 
  max-width: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 0; 
  @media (max-width: 640px) {
  top: 25%;
  right: 25%;
  bottom: 25%;
  }
`;

export const CardImage = styled.img`
  max-width: 100%; 
  max-height: 160px; 
  height: auto; 
  object-fit: contain; 
`;


export const SliderWrapper = styled.div`
    display: none;
    margin-bottom: 100px;
    .swiper-pagination {
      bottom: 0;
    }
    .my-bullet {
        background-color: red;
    }

    @media (max-width: 768px) {
      display: block;
    }

`;


export const SwriperSlideCustom = styled(SwiperSlide)`
    position: relative; 
    background-color: ${colors.gray100};
    border-radius: 1rem; 
    padding: 10px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px; 
    overflow: hidden; 
    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
    cursor: pointer;
    background-color: ${colors.light};
    
    `;


