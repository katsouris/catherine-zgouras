import React from "react";

const Card =({src,title,subTitle})=>{
    return(<div className="book read">
        <div className="cover">
            <img src={src}/>
        </div>
        <div className="description">
            <p className="title">{title}<br/>
                <span className="author">{subTitle}</span></p>
        </div>
    </div>)
}

export default Card