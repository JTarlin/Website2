import { ReactNode, ReactElement } from 'react'

//styling and so on
import styles from './spinning-icon.module.scss'
import cn from 'classnames'

type Props = {
    children: ReactNode,
    active: boolean,
    callback: (active:boolean)=>void,
    name: string,
}

export default function SpinningIcon({ children, active, callback, name }: Props): ReactElement {

    return (
        <button aria-label={name} className={cn({
            [styles.icon]: true,
            [styles.active]: active === true,})}
            onClick={()=>callback(!active)}>
            {children}
        </button>
    )
}