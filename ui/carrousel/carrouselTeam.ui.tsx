import { useLayoutEffect, useRef } from "react";
import Person from "../../components/person.component"
import { PersonCarrouselInterface } from "../../interfaces/data.interface";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CarrouselTeamUIProps {
  members: PersonCarrouselInterface[];
  members2: PersonCarrouselInterface[];
  startTrigger: string;
}

export default function CarrouselTeamUI({ members, members2, startTrigger }: CarrouselTeamUIProps) {
  const container = useRef<HTMLDivElement>(null);
  const carrousel = useRef<HTMLDivElement>(null);
  const carrousel2 = useRef<HTMLDivElement>(null);

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
        }
        );
        tl.fromTo(carrousel2.current, {
          xPercent: 0,
          x: -triggerHeight
        }, {
          x: 0
        }, 0);
      }, container);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="w-full overflow-hidden" ref={container}>
      <div className="flex space-x-12 w-fit" ref={carrousel}>
        {members.map((person: any, index: number) => {
          return (
            <div key={index}>
              <Person name={person.name} role={person.role} description={person.description} url={person.url} alt={person.alt} />
            </div>
          )
        })}
      </div>
      <div className="flex space-x-12 w-fit mt-3 xl:mt-12" ref={carrousel2}>
        {members2.map((person: any, index: number) => {
          return (
            <div key={index}>
              <Person name={person.name} role={person.role} description={person.description} url={person.url} alt={person.alt} />
            </div>
          )
        })}
      </div>
    </div>
  )
}