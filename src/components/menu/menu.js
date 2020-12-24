import React, {useEffect, useRef, useState} from "react";
import style from './menu.module.scss'

const Menu = () => {
    const [position, setPosition] = useState(null);
    let menuRef = useRef(null);

    const handleScroll = () => {
        console.log(menuRef.current.offsetTop)
        console.log(menuRef)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    useEffect(() => {
        if(menuRef){
            console.log(menuRef.current.offsetTop)

        }

    }, [menuRef]);
    return (
        <div ref={menuRef} onScroll={(e) => {
           console.log( e)
        }} className={`${style['menu-wrapper']}`}>
            asdasdasd
        </div>)
}
export default Menu