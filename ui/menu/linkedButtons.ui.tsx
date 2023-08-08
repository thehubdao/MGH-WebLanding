import Link from "next/link";
import { PageLocation } from "../../enums/common.enum";

interface ListProp {
  name: string;
  route: PageLocation;
}

interface LinkedButtonsUIProps {
  handleToggleClick: () => void;
  headerList: ListProp[];
}

export default function LinkedButtonsUI({ handleToggleClick, headerList }: LinkedButtonsUIProps) {
  let counter = 1;
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-0">
      {
        headerList.map(item => {
          return (
            <Link key={item.name} href={`/${item.route}`}>
              {/*Button */}
              <div className='flex items-center justify-start cursor-pointer' onClick={handleToggleClick}>
                <div className="font-bold flex w-full text-lm_gray ">
                  <div className="text-3xl xl:text-[60px] 2xl:text-7xl w-fit hover:text-lm_icons leading-none font-neueExtended flex items-start">{item.name} <span className="text-xl xl:text-2xl 2xl:text-3xl hidden md:block ml-2 translate-y-[20%]">0{counter++}</span></div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}