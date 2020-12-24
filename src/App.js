import React from "react";
import './App.scss';
import './index.css'
import HeroImage from "./components/heroImage/heroImage";
import StartPageContainer from "./containers/startPage/startPageContainer";
import {Container} from "react-bootstrap";
import Layout from "./components/layout/layout";
import Menu from "./components/menu/menu";

function App() {
    return (
        <>
            <Layout>
                <HeroImage/>
                <Menu/>
                <Container>
                    <StartPageContainer/>
                </Container>
            </Layout>
        </>
    );
}

export default App;
