import { useLayoutEffect, useRef } from "react";
import Person from "../../components/person.component"
import { PersonCarrouselInterface } from "../../interfaces/data.interface";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CarrouselAdvisorsProps {
  members: PersonCarrouselInterface[];
  startTrigger: string;
}

export default function CarrouselAdvisorsUI({ members, startTrigger }: CarrouselAdvisorsProps) {
  const container = useRef<HTMLDivElement>(null);
  const carrousel = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    if (container.current !== null) {
      const triggerHeight = (carrousel.current?.offsetWidth ?? 0) - window.innerWidth;
      console.log(triggerHeight, 'trigger');

      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: startTrigger,
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => "+=" + triggerHeight,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            markers: false
          },
          defaults: { ease: "none" }
        });
        tl.fromTo(carrousel.current, {
          xPercent: 0,
          x: 0
        }, {
          x: -triggerHeight
        }, 0);
      }, container);
      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden" ref={container}>
        <div className="flex flex-col md:flex-row gap-8 md:mt-10 md:mb-32 items-end">
          <div className=" w-full md:w-2/4 pl-10 lg:pl-24">
            <h1 className="font-neue text-4xl text-lm_gray font-bold">NEXT UP</h1>
            <h1 className="font-neue text-5xl md:text-7xl xl:text-[150px] text-lm_icons font-bold">OUR <br /> ADVISORS</h1>
          </div>
          <div className=" w-full md:w-2/4 pr-10 lg:pr-20 text-end mb-5 md:mb-16">
            <h1 className="font-neue text-4xl text-lm_gray font-bold">THE HUB<br />DAO</h1>
            <p className="font-neue text-4xl text-lm_icons font-bold">CORE ADVISORS</p>
          </div>
        </div>
        <div className="flex space-x-12 w-fit" ref={carrousel}>
          {members.map((person: any, index: number) => {
            return (
              <div key={index}>
                <Person name={person.name} role={person.role} description={person.description} url={person.url} alt={person.alt} />
              </div>
            )
          })};
        </div>
      </div>
    </>
  )
}