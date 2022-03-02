import { useState, ReactElement, useEffect } from 'react'

//styling and so on
import styles from './slider.module.scss'
import cn from 'classnames'

interface SwitchProps {
    on: boolean,
    callback: ()=>void,
}

export default function Slider({ on, callback }: SwitchProps): ReactElement {
    const [active, setActive] = useState<boolean>(on);

    useEffect(()=>{
        setActive(on);
    }, [on])

    return (
        <label className={styles.switch}>
            <button className={cn({
                [styles.slider]: true,
                [styles.slider__active]: active===true,
                })} onClick={()=>{
                callback();
                setActive(!active);
                }}>
            </button>
        </label>
    )
}