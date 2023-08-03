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
    <>
      {
        headerList.map(item => {
          return (
            <Link key={item.name} href={`/${item.route}`}>
              {/*Button */}
              <div className='px-8 lg:px-0 lg:pl-20 lg:pr-8 flex items-center justify-start cursor-pointer' onClick={handleToggleClick}>
                <div className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  md:hover:text-[46px] lg:hover:text-[48px] xl:hover:text-[58px] 2xl:hover:text-[82px] text-lm_gray flex hover:text-lm_icons transition-all duration-150  justify-between md:justify-start w-full">
                  <div>{item.name}</div>
                  <div className='text-xl md:text-2xl xl:text-4xl lg:mt-[6px]'>0{counter++}</div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}