import React, {useState} from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.jsx";
import {Routes, Route} from 'react-router-dom'
import Explore from "./pages/Explore.jsx";

const App = () => {

    const [playState, setPlayState] = useState(false);

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle="Программы" title="Наши предложения"/>
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subTitle="Галлерея" title="Фотографии Кампуса"/>
                <Campus />
                <Title subTitle="Подтверждение" title="Что говорят студенты"/>
                <Testimonials />
                <Title subTitle="Обратная связь" title=""/>
                <Contact />
                <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />

            {/*<Routes>*/}
            {/*    <Route path="Explore" element={<Explore />}/>*/}
            {/*</Routes>*/}
        </div>
    )
}
export default App
