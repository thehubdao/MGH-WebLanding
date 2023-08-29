import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Person from './person.component';
import { PersonCarrouselInterface } from '../interfaces/data.interface';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

interface MembersProps {
    members: PersonCarrouselInterface[];
    loop: boolean;
    reverse: boolean;

}

export default function PersonCarrousel({members, loop, reverse}: MembersProps){

    return (
    <Swiper
      // install Swiper modules
      modules={[A11y, Autoplay]} // Agrega el módulo Autoplay
      autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: reverse}}
        slidesPerView={1}
        loop={loop}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024:{
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
        }}
        style={{ padding: '0px 10px', marginBottom: '50px'}}
        
    >
        {members.map((person: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
                style={{maxWidth: '438px', minHeight: '350px', display: 'flex', justifyContent: 'center'}}
              >
                <Person name={person.name} role={person.role} description={person.description} url={person.url} alt={person.alt}/>
              </SwiperSlide>
            )
        })}
    </Swiper>
    )
}