import React from "react";
import style from './heroImage.module.scss'
import {Parallax} from "react-parallax";
import pc from "../../assets/photos/pc.jpg"

const HeroImage = () => {
    return (
        <Parallax
            renderLayer={() =>
                (<div style={{ background:`rgba(255, 125, 0, 0.7)`}}/> )}
            bgImage={pc}  className={`${style['hero']}`} strength={500}>
            <div style={{height: 500}}>
                <div className={`${style['hero-details']}`}>
                    <h1 className='text-center'>ZGOURAS CATHERINE</h1>
                    <h3 className='pt-2'>STORYTELLER / IDEA ARCHITECT / WORD MAGICIAN</h3>
                </div>
            </div>
        </Parallax>)
};

export default HeroImage