import { useState, ReactElement, useEffect } from 'react'

//component imprts
import Slider from '../slider/slider'
import SpinningIcon from '../spinning-icon/spinning-icon'

//styling and so on
import styles from './settings.module.scss'
import { FiSettings } from 'react-icons/fi'
import cn from 'classnames'

export default function Settings(): ReactElement {
    const [settings, setSettings] = useState<boolean>(false);
    const [dark, setDark] = useState<boolean>(false);
    const [easterEggs, setEasterEggs] = useState<boolean>(false);

    //get the dark theme from localstorage or user preferences
    useEffect(()=>{
        if(window.localStorage.getItem('dark')==='true') {
            document.body.dataset.theme = 'dark';
            setDark(true);
        } else if(window.localStorage.getItem('dark')==='false'){
            document.body.dataset.theme = 'light';
            setDark(false);
        } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.dataset.theme = 'dark';
            setDark(true);
        } else {
            document.body.dataset.theme = 'light';
            setDark(false);
        }
    }, [])

    const toggleDark = () => {
        localStorage.setItem('dark', `${!dark}`);
        setDark(!dark);
        document.body.dataset.theme === 'dark' ? document.body.dataset.theme = 'light' : document.body.dataset.theme = 'dark';
    }

    const toggleEggs = () => {
        setEasterEggs(!easterEggs);
    }

    return (
        <div className={cn({
            [styles.settings]: true,
            [styles.settings__open]: settings === true})}>

            <SpinningIcon
                name={'Settings icon'}
                callback={setSettings}
                active={settings}
            >
                <FiSettings/>
            </SpinningIcon>
            <ul className={cn({
                [styles.settingsList]: settings===true,
                ["none"]: settings === false})}>
                <li className={cn({
                    [styles.item]: true,
                    [styles.item__1]: settings === true,
                    [styles.none]: settings === false})}>
                    Dark
                    <Slider 
                        aria-label="Dark mode toggle"
                        on={dark} callback={toggleDark}
                    />
                </li>
                <li className={cn({
                    [styles.item]: true,
                    [styles.item__2]: settings === true,
                    [styles.none]: settings === false})}>
                    Easter Eggs
                    <Slider 
                        aria-label="Dark mode toggle"
                        on={easterEggs} callback={toggleEggs}
                    />
                </li>
          </ul>
          
        </div>
    )
}