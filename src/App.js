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
import Loader from "./components/loader/loader";
import Biographies from "./components/biographies/biographies";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";

const queryClient = new QueryClient();

const App = () => {
    const [counter, setCounter] = React.useState(4);


    const baseUrl = 'https://api.catherinezgouras.com/'
    const {isLoading, isError, error, data} = useQuery(
        'songs',
        async () => {
            const response = await fetch(
                `${baseUrl}jsonapi/node/biographies?include=bio_image`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
    );
    let publications = []
    if (data) {
        const images = data.included.map(sponsorImage => sponsorImage);
        publications = data.data.map(item => ({
            id: item.id,
            title: item.attributes.title,
            subTitle: item.attributes.subtitle,
            image: item.relationships.bio_image.data
                ? baseUrl +
                images.find(
                    image =>
                        image.id === item.relationships.bio_image.data.id
                ).attributes.uri.url
                : null
        }))
    }

    // Third Attempts
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    if (isLoading || counter > 0) {
        return (
            <Layout>
                <Loader/>
            </Layout>
        )
    }
    return (
        <BrowserRouter>
            <Layout>
                {/*<Loader/>*/}
                <ScrollHandler/>
                <HeroImage/>
                <Menu/>
                <Container>
                    <StartPageContainer/>
                </Container>
                <Biographies
                    publications={publications}
                />
                <Awards/>
                <Contact
                    baseUrl={baseUrl}
                />
                <Footer/>
            </Layout>
        </BrowserRouter>
    );
}

// Higher order function
const hof = (WrappedComponent) => {
    // Its job is to return a react component warpping the baby component
    return (props) => (
        <QueryClientProvider client={queryClient}>
            <WrappedComponent {...props} />
        </QueryClientProvider>
    );
};


export default hof(App);
