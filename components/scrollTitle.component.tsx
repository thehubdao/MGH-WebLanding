import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScroolTitleProps{
    title: string[],
    imageUrl: string
}

export default function ScrollTitleUI ({title, imageUrl}:ScroolTitleProps){
    const textElement = useRef<HTMLDivElement>(null);
    const textElement2 = useRef<HTMLDivElement>(null);
    const textElement3 = useRef<HTMLDivElement>(null);
    
    useEffect(() =>{
        gsap.to([textElement.current, textElement3.current], {
            scrollTrigger: {
                trigger: textElement.current,
                markers: false,
                start: "bottom 70%",
                scrub: 1,
            }, 
            x: "10%",
        });
        gsap.to(textElement2.current, {
            scrollTrigger: {
                trigger: textElement2.current,
                markers: false,
                start: "bottom 70%",
                scrub: 1,
            }, 
            x: "-10%",
        });
    },[])

    return(
        <>
            <div className="w-full overflow-hidden">
                <div ref={textElement}>
                    <p className="font-humane text-8xl md:text-[200px] lg:text-[220px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50 -translate-x-1/2">{title}</p>
                </div>
                <div ref={textElement2}>
                    <p className="font-humane text-8xl md:text-[200px] lg:text-[220px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50">{title}</p>
                </div>
                <div ref={textElement3}>
                    <p className="font-humane text-8xl md:text-[200px] lg:text-[220px] text-gray-light whitespace-nowrap leading-[0.8] opacity-50 -translate-x-1/2">{title}</p>
                </div>
            </div>
            <div className="w-[360px] md:w-[690px] lg:w-[1050px] h-[300px] md:h-[600px] lg:h-[774px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-[52%]">
                <Image src={imageUrl} alt={'game machine'} fill />
            </div>
        </>
    )
}