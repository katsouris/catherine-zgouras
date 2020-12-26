import React from "react";
import AboutMe from "../../components/aboutMe/aboutMe";
import Portfolio from "../../components/portfolio/portfolio";
import MyServices from "../../components/myServices/myServices";


const StartPageContainer = () => {

    return (
        <div>
            <AboutMe/>
            <MyServices/>
            <Portfolio/>
        </div>
    )
}

export default StartPageContainer