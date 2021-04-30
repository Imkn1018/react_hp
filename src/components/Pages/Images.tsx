import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Autoplay, EffectCube } from 'swiper';
import { Image } from '@chakra-ui/react';

import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([EffectCoverflow, Autoplay, EffectCube]);
export const Images = memo(() => {
  return (
    <>
      <Swiper
        effect="coverflow"
        speed={1000}
        loop={true}
        autoplay={true}
        // 3分割
        slidesPerView={3}
        coverflowEffect={{slideShadows:true}}
      >
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?nature"
            h="200"
            w="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?ocean"
            h="200"
            w="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?forest"
            h="200"
            w="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?sunset"
            h="200"
            w="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?bluesky"
            h="200"
            w="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?animal"
            h="200"
            w="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?coralreef"
            h="200"
            w="100%"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        cubeEffect={{ slideShadows: true }}
        effect="cube"
        speed={1000}
        loop={true}
        autoplay={true}
        // 3分割
      >
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?spring"
            h="200"
            w="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?summer"
            h="200"
            w="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?autumn"
            h="200"
            w="200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/featured/?winter"
            h="200"
            w="100%"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
});
