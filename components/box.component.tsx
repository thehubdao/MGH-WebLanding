import { ReactElement } from 'react'

interface BoxProps {
    children?: ReactElement
}

export default function Box({ children}: BoxProps) {
    return (
        <div className={`bg-lm_fill_gray border-light rounded-3xl shadow-boxes x-full` }>
            {children}
        </div>
    )
}