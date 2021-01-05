import React from "react";
import './App.scss';
import './index.css'
import HeroImage from "./components/heroImage/heroImage";
import StartPageContainer from "./containers/startPage/startPageContainer";
import {Container} from "react-bootstrap";
import Layout from "./components/layout/layout";
import Menu from "./components/menu/menu";
import Awards from "./components/awards/awards";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollHandler from "./components/scrollHandler/scrollHandler";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <ScrollHandler/>
                <HeroImage/>
                <Menu/>
                <Container>
                    <StartPageContainer/>
                </Container>
                <Awards/>
                <Contact/>
                <Footer/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
