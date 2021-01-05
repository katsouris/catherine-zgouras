import React from "react";
import AboutMe from "../../components/aboutMe/aboutMe";
import Portfolio from "../../components/portfolio/portfolio";
import MyServices from "../../components/myServices/myServices";
import MyResume from "../../components/myResume/myResume";


const StartPageContainer = () => {

    return (
        <div>
            <AboutMe/>
            <MyServices/>
            {/*<Portfolio/>*/}
            <MyResume/>
        </div>
    )
}

export default StartPageContainer