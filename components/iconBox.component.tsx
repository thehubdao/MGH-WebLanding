import { ReactElement } from 'react'

interface BoxProps {
    children?: ReactElement
}

export default function IconBox({ children}: BoxProps) {
    return (
        <div className={`bg-white shadow-icon-boxes rounded-md w-[236px] h-[74px] flex justify-center items-center` }>
            {children}
        </div>
    )
}