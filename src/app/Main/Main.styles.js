import styled from "styled-components";
import { colors } from '@/styles/theme';
import { SwiperSlide } from "swiper/react";

export const SliderWrapper = styled.div`
    margin-bottom: 100px;

    .swiper-pagination {
        right: 100px !important;
        left: auto;
        bottom: 40px !important;
        width: fit-content;
    }
    
    .my-bullet {
        background-color: red;
    }
`;

export const SwiperItemWrapper = styled.div`
    background-color: ${colors.light};
    border-radius: 50px;
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;

    .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .swiper-main-title {
            max-width: 500px;
        }
        
        @media (max-width: 768px) {
            flex-direction: column-reverse;
                .swiper-main-title {
                    font-size: 28px;
                    margin-bottom: 30px;
                }
                img{
                    width: 90%;
                }
        }
    }
`;

export const SwriperSlideCustom = styled(SwiperSlide)`
    padding: 0 20px;
`;