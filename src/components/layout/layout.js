import React from "react";
import style from './layout.module.scss'
const Layout = (props)=>{
    const {children} = props;
    return(
        <div className={`${style['layout']}`}>
            {children}
        </div>
    )
}

export default Layout