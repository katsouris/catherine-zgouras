import React from "react";
import style from './heroImage.module.scss'
import {Parallax} from "react-parallax";
import pc from "../../assets/photos/pc.jpg"

const HeroImage = () => {
    return (
        <div id={'#home'}>
            <Parallax
                renderLayer={() =>
                    (<div style={{ background:`rgba(255, 125, 0, 0.7)`}}/> )}
                bgImage={pc}  className={`${style['hero']}`} strength={500}>
                <div style={{height: 500}}>
                    <div className={`${style['hero-details']}`}>
                        <h1 className='text-center'>CATHERINE ZGOURAS</h1>
                        <h3 className='pt-2 text-center'>The Editorial Specialist</h3>
                    </div>
                </div>
            </Parallax>
        </div>
        )
};

export default HeroImage