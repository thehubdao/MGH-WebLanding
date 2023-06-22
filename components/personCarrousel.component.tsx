import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Person from './person.component';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

interface TeamProps {
    name: string,
    role: string,
    description: string,
    url: string,
    alt: string
}

interface MembersProps {
    members: TeamProps[]
}

export default function PersonCarrousel({members}: MembersProps){

    return (
    <Swiper
      // install Swiper modules
        modules={[A11y]}
        // spaceBetween={20}
        slidesPerView={1}
        loop={true}
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