import { ReactElement } from 'react'

interface BoxProps {
    children?: ReactElement,
    big: boolean
}

export default function IconBox({ children, big}: BoxProps) {
    return (
        <div className={`bg-white shadow-icon-boxes ${big ? 'w-[294px] h-[128px] rounded-3xl':'w-[236px] h-[74px] rounded-xl' } flex justify-center items-center` }>
            {children}
        </div>
    )
}