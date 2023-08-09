import { ReactElement } from 'react';

interface BoxProps {
    children?: ReactElement
}

export default function Box({ children}: BoxProps) {
    return (
        <div className={`bg-lm_fill border-light rounded-3xl shadow-boxes w-full` }>
            {children}
        </div>
    )
}