import React from 'react'
import {
  CatalogContainer,
  Header,
  Title,
  ViewAllButton,
  Grid,
  Card,
  CardTextContent,
  CardTitle,
  CardPrice,
  CardImageWrapper,
  CardImage,
  SwriperSlideCustom,
  SliderWrapper
} from "../katalog/Katalog.styles.js"

import { ArrowIcon } from "../../assets/icons";
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const catalogItems = [
  {
    id: 1,
    title: "Люстры",
    price: "540Р",
    image: "/catalog/cat1.png",
  },
  { id: 2, title: "Светильники", price: "540Р", image: "/catalog/cat2.png" },
  { id: 3, title: "Бра", price: "540Р", image: "/catalog/cat3.png" },
  { id: 4, title: "Торшеры", price: "540Р", image: "/catalog/cat4.png" },
  {
    id: 5,
    title: "Настольные лампы",
    price: "540Р",
    image: "/catalog/cat5.png",
  },
  { id: 6, title: "Споты", price: "540Р", image: "/catalog/cat6.png" },
];


function Katalog() {

  return (
    <div>
      <CatalogContainer>
        {/* Yuqori qism */}
        <Header>
          <Title>Каталог</Title>
          <ViewAllButton>
            Весь каталог <ArrowIcon />{" "}
            {/* Ikonka propsiz qo'shiladi, stil styled-componentdan keladi */}
          </ViewAllButton>
        </Header>

        {/* Asosiy qism: Kartochkalar gridi */}
        <Grid>
          {catalogItems.map((item) => (
            <Card key={item.id}>
              {/* Kartochka ichidagi matn */}
              <CardTextContent>
                <CardTitle>{item.title}</CardTitle>
                <CardPrice>
                  От {item.price} <ArrowIcon /> {/* Ikonka */}
                </CardPrice>
              </CardTextContent>

              {/* Rasm */}
              <CardImageWrapper>
                <CardImage src={item.image} alt={item.title} loading="lazy" />
              </CardImageWrapper>
            </Card>
          ))}
        </Grid>
        <SliderWrapper>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, bulletActiveClass: "my-bullet" }}
            spaceBetween={20}
            slidesPerView={2}
          >
            {catalogItems.map((item) => (
              <SwriperSlideCustom key={item.id}>
                <CardTextContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardPrice>
                    От {item.price} <ArrowIcon /> {/* Ikonka */}
                  </CardPrice>
                </CardTextContent>

                {/* Rasm */}
                <CardImageWrapper>
                  <CardImage src={item.image} alt={item.title} loading="lazy" />
                </CardImageWrapper>
              </SwriperSlideCustom>
            ))}

          </Swiper>
        </SliderWrapper>
        <Header>
          <Title>Почему NORNLIGHT?</Title>
          <ViewAllButton>
            Весь каталог <ArrowIcon />{" "}
            {/* Ikonka propsiz qo'shiladi, stil styled-componentdan keladi */}
          </ViewAllButton>
        </Header>
      </CatalogContainer>
    </div>
  )
}


export default Katalog